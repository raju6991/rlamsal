import { reader } from '@/lib/keystatic';

export async function getProjects() {
  const projects = await reader.collections.projects.all();
  return projects.map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.entry.title,
    description: p.entry.description,
    technologies: [...(p.entry.technologies || [])],
    demoUrl: p.entry.demoUrl,
    githubUrl: p.entry.githubUrl,
    featured: p.entry.featured,
  }));
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((p) => p.featured);
}
