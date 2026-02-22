'use client';

import * as styles from '@/app/page.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.techTags}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.projectLinks}>
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Live Demo →
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            GitHub →
          </Link>
        )}
      </div>
    </motion.div>
  );
}
