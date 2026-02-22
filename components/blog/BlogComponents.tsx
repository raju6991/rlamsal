'use client';

import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-css';
import { motion } from 'framer-motion';
import * as styles from './BlogComponents.css';

import { toast } from 'sonner';

interface SandboxProps {
  initialCode: string;
  language?: string;
  onCodeChange?: (code: string) => void;
}

export const SandboxEditor = ({ initialCode, language = 'css', onCodeChange }: SandboxProps) => {
  const [code, setCode] = useState(initialCode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    if (onCodeChange) onCodeChange(newCode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  if (!mounted) return <div className={styles.sandboxWrapper} style={{ height: '200px' }} />;

  return (
    <div className={styles.sandboxWrapper}>
      <div className={styles.sandboxHeader}>
        <span className={styles.sandboxTitle}>Interactive Editor ({language})</span>
        <button onClick={handleCopy} className={styles.copyButton}>Copy</button>
      </div>
      <div className={styles.sandboxEditor}>
        <Editor
          value={code}
          onValueChange={handleCodeChange}
          highlight={code => highlight(code, languages.css, 'css')}
          padding={20}
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 13,
          }}
        />
      </div>
    </div>
  );
};

interface PlaygroundProps {
  type: 'flex' | 'grid' | 'animation' | 'gradient';
  codeOverride?: string;
}

export const BlogPlayground = ({ type, codeOverride }: PlaygroundProps) => {
  return (
    <div className={styles.playgroundWrapper}>
      <div className={styles.sandboxHeader}>
        <span className={styles.sandboxTitle}>Live Preview: {type.toUpperCase()}</span>
      </div>
      <div className={styles.playgroundPreview}>
        {type === 'flex' && (
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i} 
                className={styles.playgroundItem}
                animate={{ scale: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {i}
              </motion.div>
            ))}
          </div>
        )}
        {type === 'grid' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <motion.div 
                key={i} 
                className={styles.playgroundItem}
                style={{ minWidth: '40px', minHeight: '40px', padding: '10px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {i}
              </motion.div>
            ))}
          </div>
        )}
        {type === 'animation' && (
          <motion.div 
            className={styles.playgroundItem}
            animate={{ 
              rotate: 360,
              borderRadius: ["20%", "50%", "20%"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ width: '100px', height: '100px' }}
          />
        )}
        {type === 'gradient' && (
          <div 
            style={{ 
              width: '100%', 
              height: '300px', 
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #FF4D6A, #4169E1)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}
          />
        )}
      </div>
    </div>
  );
};

export const InteractiveIllustration = ({ initialCode, type }: { initialCode: string, type: any }) => {
  const [code, setCode] = useState(initialCode);
  
  return (
    <div style={{ margin: '2rem 0' }}>
      <BlogPlayground type={type} codeOverride={code} />
      <SandboxEditor initialCode={initialCode} onCodeChange={setCode} />
    </div>
  );
};
