import { reader } from '@/lib/keystatic';
import { DocumentRenderer } from '@keystatic/core/renderer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CodeBlock } from '@/components/common/CodeBlock';
import * as styles from './page.css';

import { SandboxEditor, BlogPlayground, InteractiveIllustration } from '@/components/blog/BlogComponents';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return notFound();
  }

  const content = await post.content();

  return (
    <div className={styles.page}>
      <Link href="/writing" className={styles.backLink}>
        ← Back to Writing
      </Link>

      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className={styles.banner}
          priority
        />
      )}

      <header className={styles.header}>
        <div className={styles.meta}>
          <time className={styles.date}>{post.publishedDate}</time>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </header>

      <article className={styles.content}>
        <DocumentRenderer
          document={content}
          renderers={{
            block: {
              code: (props) => <CodeBlock {...props} />,
              image: (props) => (
                <div style={{ margin: '2rem 0' }}>
                  <Image
                    src={props.src}
                    alt={props.alt || ''}
                    width={800}
                    height={450}
                    style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                  />
                  {props.title && (
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        color: '#666',
                        marginTop: '0.5rem',
                      }}
                    >
                      {props.title}
                    </p>
                  )}
                </div>
              ),
            },
          }}
          componentBlocks={{
            image: (props) => (
              <div style={{ margin: '2rem 0' }}>
                <Image
                  src={props.src}
                  alt={props.alt || ''}
                  width={800}
                  height={450}
                  style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                />
                {props.title && (
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      color: '#666',
                      marginTop: '0.5rem',
                    }}
                  >
                    {props.title}
                  </p>
                )}
              </div>
            ),
            sandbox: (props) => <SandboxEditor {...props} />,
            playground: (props) => <BlogPlayground {...props} />,
            illustration: (props) => <InteractiveIllustration {...props} />,
          }}
        />
      </article>
    </div>
  );
}
