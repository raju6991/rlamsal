import { ProjectsList } from '@/components/home/ProjectsList';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import * as styles from './page.css';

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Work</h1>
        <p className={styles.subtitle}>
          A collection of projects I&apos;ve worked on, showcasing my skills in full-stack
          development, design, and problem-solving.
        </p>
      </div>

      <section className={styles.section}>
        <ProjectsList projects={projects} />
      </section>

      <section className={styles.cta}>
        <p className={styles.ctaText}>Interested in working together? Let&apos;s connect!</p>
        <Link href="/connect" className={styles.ctaButton}>
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
