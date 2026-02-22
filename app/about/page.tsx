'use client';

import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import * as styles from './page.css';

const skills = {
  Backend: ['PHP', 'MySQL', 'MSSQL', 'API Integration', 'Stripe', 'Google Maps'],
  CMS: ['WordPress', 'Plugin Development'],
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React', 'Next.js', 'Responsive Design'],
  Tools: ['Git', 'GitHub', 'Bitbucket', 'Vercel', 'WHM/cPanel', 'SSL', 'VS Code'],
};

const experience = [
  {
    year: 'Oct 2025 - Present',
    title: 'Help Desk Support & System Testing',
    company: 'Polymorphic Solutions — Brisbane, QLD',
    description:
      'Assisting development teams with debugging PHP applications and WordPress sites. Performing functional and cross-browser testing and documenting issues.',
  },
  {
    year: 'Jun 2020 - Jan 2022',
    title: 'Frontend Developer',
    company: 'Eversoft Nepal — Pokhara, Nepal',
    description:
      'Built and maintained web interfaces using JavaScript, React, and PHP. Integrated REST APIs and collaborated on WordPress projects for client websites.',
  },
];

const education = [
  {
    year: '2023',
    degree: 'Master of Technology (Software Engineering)',
    institution: 'Federation University Australia',
  },
  {
    year: '2021',
    degree: 'Bachelor of Computer Application',
    institution: 'Pokhara University',
  },
];

const funFacts = [
  { emoji: '☕', text: 'Coffee enthusiast' },
  { emoji: '🎸', text: 'Learning guitar' },
  { emoji: '📚', text: 'Book lover' },
  { emoji: '🌍', text: 'Travel fan' },
];

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

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <motion.div
        className={styles.profileSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.avatar}
          animate={{
            boxShadow: ['0 0 0 0 rgba(220, 20, 60, 0.4)', '0 0 0 10px rgba(220, 20, 60, 0)'],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
        >
          <span className={styles.avatarInitial}>RL</span>
        </motion.div>
        <h1 className={styles.name}>Raju Lamsal</h1>
        <p className={styles.title}>Junior Web Developer</p>
      </motion.div>

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.div className={styles.bio} variants={itemVariants}>
          <p>
            I&apos;m a Junior Web Developer with hands-on experience in PHP-based systems, WordPress
            CMS, and modern front-end technologies. I have a strong foundation in building full
            website lifecycles, from API integration to database management and deployment.
          </p>
          <p>
            Currently based in Brisbane, I am passionate about solving complex problems and
            collaborating with dynamic teams. I am eager to grow into full-stack development and
            contribute to innovative digital solutions in Australia.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Skills
        </motion.h2>
        <motion.div className={styles.skillsGrid} variants={itemVariants}>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{category}</h3>
              <div className={styles.skillTags}>
                {skillList.map((skill) => (
                  <motion.span
                    key={skill}
                    className={styles.skillTag}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Experience
        </motion.h2>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <motion.div key={item.year} className={styles.timelineItem} variants={itemVariants}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineCompany}>{item.company}</p>
                <p className={styles.timelineDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Education
        </motion.h2>
        <div className={styles.timeline}>
          {education.map((item) => (
            <motion.div
              key={item.year + item.degree}
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.degree}</h3>
                <p className={styles.timelineCompany}>{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          GitHub Contributions
        </motion.h2>
        <motion.div className={styles.githubStats} variants={itemVariants}>
          <div className={styles.calendarContainer}>
            <GitHubCalendar
              username="raju6991"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Fun Facts
        </motion.h2>
        <motion.div className={styles.funFacts} variants={itemVariants}>
          {funFacts.map((fact) => (
            <motion.div
              key={fact.text}
              className={styles.funFactCard}
              whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.funFactEmoji}>{fact.emoji}</span>
              <span className={styles.funFactText}>{fact.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
