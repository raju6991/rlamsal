# Creating Animations with Framer Motion

Framer Motion is a powerful animation library for React that makes creating smooth, interactive animations simple and declarative.

## Getting Started

Install Framer Motion:

```bash
npm install framer-motion
```

## Basic Animations

### Fade In

```tsx
import { motion } from 'framer-motion';

export function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

### Slide and Fade

```tsx
export function SlideIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

## Complex Animations

### Staggered Children

Animate list items one after another:

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AnimatedList({ items }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((item) => (
        <motion.li key={item.id} variants={item}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

### Gestures

Add hover and tap effects:

```tsx
export function InteractiveCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{', stiffness:  type: 'spring300 }}
    >
      {children}
    </motion.div>
  );
}
```

## Page Transitions

Create smooth transitions between routes:

```tsx
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

## Tips for Great Animations

1. **Keep it subtle** - Over-animating can be distracting
2. **Use spring physics** - They feel more natural than linear easing
3. **Consider reduced motion** - Respect user preferences
4. **Performance** - Use transform and opacity for best performance
5. **Purpose** - Animations should serve a purpose, not just decoration

## Conclusion

Framer Motion makes React animations accessible and enjoyable. Start with simple animations and gradually add complexity as you become more comfortable with the API.
