'use client';

import { motion } from 'framer-motion';
import * as styles from '@/app/page.css';
import { ReactNode } from 'react';

export function HeroVisual({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className={styles.heroVisual}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className={styles.codeBlock}>
        <div className={styles.codeHeader}>
          <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
          <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
          <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
        </div>
        {children}
      </div>
    </motion.div>
  );
}
