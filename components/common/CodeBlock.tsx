'use client';

import { codeToHtml } from 'shiki';
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import * as styles from '@/app/writing/[slug]/page.css';

export interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ 
  children, 
  language = 'typescript',
}: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    async function highlight() {
      try {
        const out = await codeToHtml(children, {
          lang: language,
          theme: 'github-dark',
        });
        setHtml(out);
      } catch (e) {
        console.error('Shiki highlight failed', e);
        setHtml(`<pre><code>${children}</code></pre>`);
      }
    }
    highlight();
  }, [children, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    toast.success('Code copied to clipboard!');
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeLanguage}>{language}</span>
        <button onClick={handleCopy} className={styles.copyButton}>
          Copy
        </button>
      </div>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <pre className={styles.codePlaceholder}>
          <code>{children}</code>
        </pre>
      )}
    </div>
  );
}
