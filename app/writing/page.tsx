import { reader } from '@/lib/keystatic';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './page.css';

export default async function WritingPage() {
  const posts = await reader.collections.posts.all();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Writing</h1>
        <p className={styles.subtitle}>
          Thoughts on software development, design, and everything in between.
        </p>
      </header>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            {post.entry.coverImage && (
              <Image
                src={post.entry.coverImage}
                alt={post.entry.title}
                width={400}
                height={200}
                className={styles.postImage}
              />
            )}
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <time className={styles.postDate}>{post.entry.publishedDate}</time>
                <div className={styles.tags}>
                  {post.entry.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={`/writing/${post.slug}`} className={styles.postLink}>
                <h2 className={styles.postTitle}>{post.entry.title}</h2>
              </Link>
              <p className={styles.postExcerpt}>{post.entry.excerpt}</p>
              <Link href={`/writing/${post.slug}`} className={styles.readMore}>
                Read Article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
