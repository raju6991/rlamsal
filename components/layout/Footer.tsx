'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import * as styles from './Footer.css';

const socialLinks = [
  { href: 'https://github.com/raju6991', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/rajulamsal', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:rajulamsal62@gmail.com', label: 'Email', icon: Mail },
];

export function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="Site footer"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Raju Lamsal. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
