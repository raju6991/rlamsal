'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as styles from '@/app/page.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function HeroContent() {
  return (
    <motion.div
      className={styles.heroContent}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className={styles.greeting} variants={itemVariants}>
        Hello, I&apos;m
      </motion.p>
      <motion.h1 className={styles.title} variants={itemVariants}>
        <span className={styles.name}>Raju Lamsal</span>
      </motion.h1>
      <motion.p className={styles.subtitle} variants={itemVariants}>
        Junior Web Developer crafting exceptional digital platforms and systems
      </motion.p>
      <motion.div className={styles.cta} variants={itemVariants}>
        <Link href="/work" className={styles.buttonPrimary}>
          View My Work
        </Link>
        <Link href="/connect" className={styles.buttonSecondary}>
          Get In Touch
        </Link>
      </motion.div>
    </motion.div>
  );
}
