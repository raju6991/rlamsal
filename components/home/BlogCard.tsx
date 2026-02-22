'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as styles from '@/app/page.css';

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
  };
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      className={styles.blogCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <p className={styles.blogDate}>{post.date}</p>
      <h3 className={styles.blogTitle}>{post.title}</h3>
      <p className={styles.blogExcerpt}>{post.excerpt}</p>
      <Link href={`/writing/${post.slug}`} className={styles.readMore}>
        Read More →
      </Link>
    </motion.div>
  );
}
