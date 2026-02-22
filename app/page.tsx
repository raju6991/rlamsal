import { CodeBlock } from '@/components/common/CodeBlock';
import { BlogCard } from '@/components/home/BlogCard';
import { HeroContent } from '@/components/home/HeroContent';
import { HeroVisual } from '@/components/home/HeroVisual';
import { ProjectCard } from '@/components/home/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';
import Link from 'next/link';
import * as styles from './page.css';

const featuredProjects = await getFeaturedProjects();

const latestPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 16',
    date: '2024-01-15',
    excerpt: 'Learn how to build modern web applications with Next.js 16 and its new features.',
  },
  {
    slug: 'testing-with-vitest',
    title: 'Testing Best Practices with Vitest',
    date: '2024-01-10',
    excerpt: 'Discover how to write efficient and maintainable tests using Vitest.',
  },
  {
    slug: 'framer-motion-animations',
    title: 'Creating Animations with Smooth Framer Motion',
    date: '2024-01-05',
    excerpt: 'Add delightful animations to your React applications with Framer Motion.',
  },
];

export default async function HomePage() {
  const codeContent = `const developer = {
  name: "Raju Lamsal",
  role: "Junior Web Developer",
  skills: ["PHP", "Next.js", "WordPress"],
  passion: "Building efficient digital solutions"
};`;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <HeroContent />
        <HeroVisual>
          <CodeBlock language="typescript" className={styles.codeContent}>
            {codeContent}
          </CodeBlock>
        </HeroVisual>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <Link href="/work" className={styles.viewAll}>
            View All →
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Writing</h2>
          <Link href="/writing" className={styles.viewAll}>
            View All →
          </Link>
        </div>
        <div className={styles.grid}>
          {latestPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
