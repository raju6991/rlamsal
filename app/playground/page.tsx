'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';
import usePartySocket from 'partysocket/react';
import Editor from 'react-simple-code-editor';
import { toast } from 'sonner';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import * as styles from './page.css';
import { vars } from '@/styles/theme.css';
import { useSound } from '@/components/SoundContext';

type Category = 'flex' | 'grid' | 'animation' | 'gradient' | 'svg';
type SvgShape = 'circle' | 'rect' | 'path' | 'recursion';

interface Presence {
  id: string;
  x: number;
  y: number;
  name: string;
  color: string;
}

// Custom Slider Component
const Slider = ({ label, value, min, max, step = 1, unit = '', onChange }: any) => {
  const { playSound } = useSound();
  return (
    <div className={styles.controlGroup}>
      <div className={styles.labelRow}>
        <label className={styles.label}>{label}</label>
        <span className={styles.valueBadge}>{value}{unit}</span>
      </div>
      <input
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          playSound('pop');
        }}
      />
    </div>
  );
};

// Custom Segmented Control
const SegmentedControl = ({ label, options, value, onChange }: any) => {
  const { playSound } = useSound();
  return (
    <div className={styles.controlGroup}>
      <label className={styles.label}>{label}</label>
      <div className={styles.segmentedControl}>
        {options.map((opt: any) => (
          <button
            key={opt.value}
            className={`${styles.segmentButton} ${value === opt.value ? styles.segmentButtonActive : ''}`}
            onClick={() => {
              onChange(opt.value);
              playSound('pop');
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function PlaygroundPage() {
  const { playSound } = useSound();
  const [category, setCategory] = useState<Category>('flex');
  const [presences, setPresences] = useState<Record<string, Presence>>({});
  const [mounted, setMounted] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const isUpdatingFromEditor = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SVG-specific shape
  const [svgShape, setSvgShape] = useState<SvgShape>('circle');

  // Flexbox state
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('center');
  const [alignItems, setAlignItems] = useState('center');
  const [flexWrap, setFlexWrap] = useState('nowrap');
  const [gap, setGap] = useState(16);

  // Grid state
  const [gridColumns, setGridColumns] = useState(3);
  const [gridGap, setGridGap] = useState(16);

  // Animation state
  const [animationType, setAnimationType] = useState('pulse');
  const [duration, setDuration] = useState(2);

  // Gradient state
  const [gradientStart, setGradientStart] = useState('#DC143C');
  const [gradientEnd, setGradientEnd] = useState('#4169E1');
  const [gradientAngle, setGradientAngle] = useState(45);

  // SVG state
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [strokeColor, setStrokeColor] = useState('#DC143C');
  const [svgDuration, setSvgDuration] = useState(2);

  // Code state for the sandbox
  const [code, setCode] = useState('');

  const generateCode = useCallback(() => {
    if (category === 'flex') {
      return `.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  gap: ${gap}px;
}`;
    }
    if (category === 'grid') {
      return `.container {
  display: grid;
  grid-template-columns: repeat(${gridColumns}, 1fr);
  gap: ${gridGap}px;
}`;
    }
    if (category === 'animation') {
      const animationCode = animationType === 'pulse' 
        ? `{
  scale: [1, 1.1, 1],
  transition: { duration: ${duration}, repeat: Infinity }
}`
        : `{
  rotate: 360,
  transition: { duration: ${duration}, repeat: Infinity, ease: "linear" }
}`;
      return `/* Framer Motion Props */
<motion.div
  animate=${animationCode}
/>

/* CSS Alternative */
.element {
  animation: ${animationType} ${duration}s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`;
    }
    if (category === 'gradient') {
      return `.gradient-box {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  background: linear-gradient(
    ${gradientAngle}deg,
    ${gradientStart},
    ${gradientEnd}
  );
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}`;
    }
    if (category === 'svg') {
      if (svgShape === 'circle') {
        return `/* SVG Drawing (Circle) */
<motion.svg width="240" height="240" viewBox="0 0 200 200">
  <motion.circle
    cx="100" cy="100" r="80"
    stroke="${strokeColor}" strokeWidth="${strokeWidth}" fill="transparent"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: ${svgDuration}, repeat: Infinity }}
  />
</motion.svg>`;
      }
      if (svgShape === 'rect') {
        return `/* SVG Drawing (Rect) */
<motion.svg width="240" height="240" viewBox="0 0 200 200">
  <motion.rect
    x="20" y="20" width="160" height="160" rx="20"
    stroke="${strokeColor}" strokeWidth="${strokeWidth}" fill="transparent"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: ${svgDuration}, repeat: Infinity }}
  />
</motion.svg>`;
      }
      if (svgShape === 'recursion') {
        return `/* SVG Drawing (Fractal/Recursion) */
<motion.svg width="240" height="240" viewBox="0 0 200 200">
  <motion.g stroke="${strokeColor}" strokeWidth="${strokeWidth}" fill="transparent">
    {[0, 1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        cx="100" cy="100" r={20 + i * 20}
        initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1 - i * 0.2,
          rotate: 360
        }}
        transition={{
          duration: ${svgDuration} + i,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </motion.g>
</motion.svg>`;
      }
      return `/* SVG Drawing (Complex) */`;
    }
    return `/* SVG Drawing */`;
  }, [category, flexDirection, justifyContent, alignItems, flexWrap, gap, gridColumns, gridGap, animationType, duration, gradientAngle, gradientStart, gradientEnd, strokeWidth, strokeColor, svgDuration, svgShape]);

  // Sync controls to code
  useEffect(() => {
    if (!isUpdatingFromEditor.current) {
      setCode(generateCode());
    }
  }, [generateCode]);

  // Simple CSS parser for two-way sync
  const parseCode = (newCode: string) => {
    isUpdatingFromEditor.current = true;
    try {
      if (category === 'flex') {
        const dir = newCode.match(/flex-direction:\s*([^;]+)/)?.[1]?.trim();
        const jc = newCode.match(/justify-content:\s*([^;]+)/)?.[1]?.trim();
        const ai = newCode.match(/align-items:\s*([^;]+)/)?.[1]?.trim();
        const fw = newCode.match(/flex-wrap:\s*([^;]+)/)?.[1]?.trim();
        const g = newCode.match(/gap:\s*(\d+)px/)?.[1]?.trim();

        if (dir) setFlexDirection(dir);
        if (jc) setJustifyContent(jc);
        if (ai) setAlignItems(ai);
        if (fw) setFlexWrap(fw);
        if (g) setGap(parseInt(g));
      } else if (category === 'grid') {
        const cols = newCode.match(/repeat\((\d+),/)?.[1]?.trim();
        const g = newCode.match(/gap:\s*(\d+)px/)?.[1]?.trim();
        if (cols) setGridColumns(parseInt(cols));
        if (g) setGridGap(parseInt(g));
      } else if (category === 'gradient') {
        const angle = newCode.match(/(\d+)deg/)?.[1]?.trim();
        const colors = newCode.match(/(#[0-9a-fA-F]{3,6})/g);
        if (angle) setGradientAngle(parseInt(angle));
        if (colors && colors.length >= 2) {
          setGradientStart(colors[0]);
          setGradientEnd(colors[1]);
        }
      } else if (category === 'svg') {
        const stroke = newCode.match(/stroke="([^"]+)"/)?.[1];
        const width = newCode.match(/strokeWidth="(\d+)"/)?.[1];
        const dur = newCode.match(/duration:\s*(\d+)/)?.[1];
        if (stroke) setStrokeColor(stroke);
        if (width) setStrokeWidth(parseInt(width));
        if (dur) setSvgDuration(parseInt(dur));
      }
    } catch (e) {
      console.error('Failed to parse code:', e);
    }
    isUpdatingFromEditor.current = false;
  };

  const socket = usePartySocket({
    host: process.env.NEXT_PUBLIC_PARTYKIT_HOST || "127.0.0.1:1999",
    room: "css-playground",
    onMessage(message) {
      try {
        const data = JSON.parse(message.data);
        if (data.type === 'sync') {
          const state = data.state;
          if (state.category) setCategory(state.category);
          if (state.flexDirection) setFlexDirection(state.flexDirection);
          if (state.justifyContent) setJustifyContent(state.justifyContent);
          if (state.alignItems) setAlignItems(state.alignItems);
          if (state.flexWrap) setFlexWrap(state.flexWrap);
          if (state.gap !== undefined) setGap(state.gap);
          if (state.gridColumns !== undefined) setGridColumns(state.gridColumns);
          if (state.gridGap !== undefined) setGridGap(state.gridGap);
          if (state.animationType) setAnimationType(state.animationType);
          if (state.duration !== undefined) setDuration(state.duration);
          if (state.gradientStart) setGradientStart(state.gradientStart);
          if (state.gradientEnd) setGradientEnd(state.gradientEnd);
          if (state.gradientAngle !== undefined) setGradientAngle(state.gradientAngle);
          if (state.strokeWidth !== undefined) setStrokeWidth(state.strokeWidth);
          if (state.strokeColor) setStrokeColor(state.strokeColor);
          if (state.svgDuration !== undefined) setSvgDuration(state.svgDuration);
          if (state.svgShape) setSvgShape(state.svgShape);
          if (state.code) setCode(state.code);
        } else if (data.type === 'presence') {
          setPresences(prev => ({
            ...prev,
            [data.id]: data
          }));
        } else if (data.type === 'presence-remove') {
          setPresences(prev => {
            const next = { ...prev };
            delete next[data.id];
            return next;
          });
        }
      } catch (e) {}
    }
  });

  const syncState = (newState: any) => {
    socket.send(JSON.stringify({ type: 'sync', state: newState }));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!previewRef.current) return;
    const rect = previewRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    socket.send(JSON.stringify({
      type: 'presence',
      x,
      y,
      name: 'Designer',
      color: vars.color.primary.default
    }));
  };

  const categories: { id: Category; label: string }[] = [
    { id: 'flex', label: 'Flexbox' },
    { id: 'grid', label: 'Grid' },
    { id: 'animation', label: 'Animations' },
    { id: 'gradient', label: 'Gradients' },
    { id: 'svg', label: 'SVG' },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          CSS Playground
        </motion.h1>
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A premium interactive sandbox for modern CSS layouts and animations.
        </motion.p>
      </header>

      <div className={styles.categoryNav}>
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.id}
            className={`${styles.navButton} ${category === cat.id ? styles.navButtonActive : ''}`}
            onClick={() => {
              setCategory(cat.id);
              syncState({ category: cat.id });
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.controls}>
            {category === 'flex' && (
              <>
                <SegmentedControl
                  label="Direction"
                  value={flexDirection}
                  options={[
                    { label: 'Row', value: 'row' },
                    { label: 'Column', value: 'column' },
                    { label: 'Row Rev', value: 'row-reverse' },
                  ]}
                  onChange={(val: any) => {
                    setFlexDirection(val);
                    syncState({ flexDirection: val });
                  }}
                />
                <SegmentedControl
                  label="Justify"
                  value={justifyContent}
                  options={[
                    { label: 'Start', value: 'flex-start' },
                    { label: 'Center', value: 'center' },
                    { label: 'End', value: 'flex-end' },
                    { label: 'Between', value: 'space-between' },
                  ]}
                  onChange={(val: any) => {
                    setJustifyContent(val);
                    syncState({ justifyContent: val });
                  }}
                />
                <Slider
                  label="Gap"
                  value={gap}
                  min={0}
                  max={100}
                  unit="px"
                  onChange={(val: any) => {
                    const n = parseInt(val);
                    setGap(n);
                    syncState({ gap: n });
                  }}
                />
              </>
            )}

            {category === 'grid' && (
              <>
                <Slider
                  label="Columns"
                  value={gridColumns}
                  min={1}
                  max={12}
                  onChange={(val: any) => {
                    const n = parseInt(val);
                    setGridColumns(n);
                    syncState({ gridColumns: n });
                  }}
                />
                <Slider
                  label="Gap"
                  value={gridGap}
                  min={0}
                  max={64}
                  unit="px"
                  onChange={(val: any) => {
                    const n = parseInt(val);
                    setGridGap(n);
                    syncState({ gridGap: n });
                  }}
                />
              </>
            )}

            {category === 'animation' && (
              <>
                <SegmentedControl
                  label="Type"
                  value={animationType}
                  options={[
                    { label: 'Pulse', value: 'pulse' },
                    { label: 'Spin', value: 'spin' },
                  ]}
                  onChange={(val: any) => {
                    setAnimationType(val);
                    syncState({ animationType: val });
                  }}
                />
                <Slider
                  label="Duration"
                  value={duration}
                  min={0.1}
                  max={10}
                  step={0.1}
                  unit="s"
                  onChange={(val: any) => {
                    const n = parseFloat(val);
                    setDuration(n);
                    syncState({ duration: n });
                  }}
                />
              </>
            )}

            {category === 'gradient' && (
              <>
                <Slider
                  label="Angle"
                  value={gradientAngle}
                  min={0}
                  max={360}
                  unit="deg"
                  onChange={(val: any) => {
                    const n = parseInt(val);
                    setGradientAngle(n);
                    syncState({ gradientAngle: n });
                  }}
                />
                <div className={styles.controlGroup}>
                  <label className={styles.label}>Colors</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input 
                      type="color" 
                      value={gradientStart} 
                      onChange={(e) => {
                        setGradientStart(e.target.value);
                        syncState({ gradientStart: e.target.value });
                      }}
                      style={{ flex: 1, height: '40px', border: 'none', borderRadius: '4px' }}
                    />
                    <input 
                      type="color" 
                      value={gradientEnd} 
                      onChange={(e) => {
                        setGradientEnd(e.target.value);
                        syncState({ gradientEnd: e.target.value });
                      }}
                      style={{ flex: 1, height: '40px', border: 'none', borderRadius: '4px' }}
                    />
                  </div>
                </div>
              </>
            )}

            {category === 'svg' && (
              <>
                <SegmentedControl
                  label="Shape"
                  value={svgShape}
                  options={[
                    { label: 'Circle', value: 'circle' },
                    { label: 'Rect', value: 'rect' },
                    { label: 'Fractal', value: 'recursion' },
                  ]}
                  onChange={(val: any) => {
                    setSvgShape(val);
                    syncState({ svgShape: val });
                    playSound('pop');
                  }}
                />
                <Slider
                  label="Stroke Width"
                  value={strokeWidth}
                  min={1}
                  max={20}
                  unit="px"
                  onChange={(val: any) => {
                    const n = parseInt(val);
                    setStrokeWidth(n);
                    syncState({ strokeWidth: n });
                  }}
                />
                <Slider
                  label="Animation Duration"
                  value={svgDuration}
                  min={0.5}
                  max={5}
                  step={0.1}
                  unit="s"
                  onChange={(val: any) => {
                    const n = parseFloat(val);
                    setSvgDuration(n);
                    syncState({ svgDuration: n });
                  }}
                />
                <div className={styles.controlGroup}>
                  <label className={styles.label}>Stroke Color</label>
                  <input 
                    type="color" 
                    value={strokeColor} 
                    onChange={(e) => {
                      setStrokeColor(e.target.value);
                      syncState({ strokeColor: e.target.value });
                    }}
                    style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px' }}
                  />
                </div>
              </>
            )}
          </div>

          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>Sandbox Editor</span>
              <button 
                className={styles.copyButton}
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  toast.success('CSS copied to clipboard!');
                }}
              >
                Copy
              </button>
            </div>
            <div className={styles.editorWrapper}>
              {mounted && (
                <Editor
                  value={code}
                  onValueChange={newCode => {
                    setCode(newCode);
                    parseCode(newCode);
                    syncState({ code: newCode });
                  }}
                  highlight={code => highlight(code, languages.css, 'css')}
                  padding={20}
                  className={styles.editorStyle}
                  style={{
                    fontFamily: '"Fira Code", monospace',
                    fontSize: 13,
                  }}
                />
              )}
            </div>
          </div>
        </aside>

        <main 
          className={styles.previewContainer} 
          ref={previewRef}
          onMouseMove={handleMouseMove}
        >
          {/* Presence Cursors */}
          <AnimatePresence>
            {Object.values(presences).map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.presenceCursor}
                style={{
                  left: `${p.x * 100}%`,
                  top: `${p.y * 100}%`,
                }}
              >
                <svg 
                  className={styles.cursorPointer} 
                  viewBox="0 0 16 16" 
                  fill={p.color}
                >
                  <path d="M0 0l16 5.3-9.4 1.3-1.3 9.4z" />
                </svg>
                <div 
                  className={styles.cursorLabel}
                  style={{ backgroundColor: p.color }}
                >
                  {p.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className={styles.previewContent}>
            {category === 'flex' && (
              <div
                className={styles.flexBox}
                style={{
                  display: 'flex',
                  flexDirection: flexDirection as any,
                  justifyContent: justifyContent,
                  alignItems: alignItems,
                  flexWrap: flexWrap as any,
                  gap: `${gap}px`,
                }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    className={styles.flexItem}
                    layout
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
            )}

            {category === 'grid' && (
              <div
                className={styles.gridBox}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                  gap: `${gridGap}px`,
                }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.gridItem}
                    layout
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
            )}

            {category === 'animation' && (
              <motion.div
                className={styles.flexItem}
                animate={
                  animationType === 'pulse'
                    ? { scale: [1, 1.1, 1] }
                    : { rotate: 360 }
                }
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ width: '120px', height: '120px' }}
              />
            )}

            {category === 'gradient' && (
              <div
                className={styles.previewContent}
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: vars.radius.md,
                  background: `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`,
                  boxShadow: vars.shadow.xl,
                }}
              />
            )}

            {category === 'svg' && (
              <motion.svg
                width="240"
                height="240"
                viewBox="0 0 200 200"
                initial="hidden"
                animate="visible"
                key={`${svgShape}-${strokeColor}-${strokeWidth}-${svgDuration}`} 
              >
                {svgShape === 'circle' && (
                  <motion.circle
                    cx="100" cy="100" r="80"
                    stroke={strokeColor} strokeWidth={strokeWidth}
                    fill="transparent"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: {
                        pathLength: 1, opacity: 1,
                        transition: { duration: svgDuration, repeat: Infinity },
                      },
                    }}
                  />
                )}
                {svgShape === 'rect' && (
                  <motion.rect
                    x="20" y="20" width="160" height="160" rx="20"
                    stroke={strokeColor} strokeWidth={strokeWidth}
                    fill="transparent"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: {
                        pathLength: 1, opacity: 1,
                        transition: { duration: svgDuration, repeat: Infinity },
                      },
                    }}
                  />
                )}
                {svgShape === 'recursion' && (
                  <motion.g
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <motion.circle
                        key={i}
                        cx="100" cy="100" r={20 + i * 20}
                        variants={{
                          hidden: { pathLength: 0, opacity: 0, rotate: 0 },
                          visible: {
                            pathLength: 1, opacity: 1 - i * 0.2, rotate: 360,
                            transition: { 
                              duration: svgDuration + i, 
                              repeat: Infinity,
                              ease: "linear"
                            },
                          },
                        }}
                      />
                    ))}
                  </motion.g>
                )}
              </motion.svg>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
