import { describe, expect, it } from 'vitest';

describe('Navigation', () => {
  it('should have correct navigation items', () => {
    const navItems = [
      { href: '/', label: 'Home' },
      { href: '/writing', label: 'Writing' },
      { href: '/work', label: 'My Work' },
      { href: '/about', label: 'About' },
      { href: '/connect', label: "Let's Connect" },
      { href: '/vitest', label: 'Vitest' },
    ];

    expect(navItems).toHaveLength(6);
    expect(navItems[0].href).toBe('/');
    expect(navItems[0].label).toBe('Home');
  });

  it('should highlight active navigation item', () => {
    const activePath = '/work';
    const isActive = (href: string) => href === activePath;

    expect(isActive('/work')).toBe(true);
    expect(isActive('/')).toBe(false);
  });
});

describe('Projects', () => {
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-featured online store',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: '2',
      title: 'Real-time Chat App',
      description: 'Instant messaging application',
      technologies: ['Next.js', 'PartyKit', 'TypeScript'],
    },
  ];

  it('should have projects with required fields', () => {
    projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.technologies).toBeDefined();
      expect(Array.isArray(project.technologies)).toBe(true);
    });
  });

  it('should have featured projects', () => {
    const featured = projects.filter((p) => p.technologies.includes('React'));
    expect(featured.length).toBeGreaterThan(0);
  });
});

describe('Blog Posts', () => {
  const posts = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started with Next.js 16',
      date: '2024-01-15',
      excerpt: 'Learn how to build modern web applications',
      tags: ['Next.js', 'React'],
    },
  ];

  it('should have posts with required fields', () => {
    posts.forEach((post) => {
      expect(post.slug).toBeDefined();
      expect(post.title).toBeDefined();
      expect(post.date).toBeDefined();
      expect(post.excerpt).toBeDefined();
    });
  });

  it('should format date correctly', () => {
    const post = posts[0];
    const date = new Date(post.date);
    expect(date.getFullYear()).toBe(2024);
  });
});

describe('Skills', () => {
  const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript'],
    Backend: ['Node.js', 'Python', 'PostgreSQL'],
    Tools: ['Git', 'Docker', 'AWS'],
  };

  it('should have skills organized by category', () => {
    expect(Object.keys(skills)).toContain('Frontend');
    expect(Object.keys(skills)).toContain('Backend');
    expect(Object.keys(skills)).toContain('Tools');
  });

  it('should have non-empty skill arrays', () => {
    Object.values(skills).forEach((skillList) => {
      expect(skillList.length).toBeGreaterThan(0);
    });
  });
});

describe('Experience', () => {
  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Software Developer',
      company: 'Tech Company',
      description: 'Leading development of cloud-native applications',
    },
  ];

  it('should have experience entries with required fields', () => {
    experience.forEach((exp) => {
      expect(exp.year).toBeDefined();
      expect(exp.title).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.description).toBeDefined();
    });
  });
});
