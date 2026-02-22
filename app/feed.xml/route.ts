import { NextResponse } from 'next/server';

const posts = [
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

const siteUrl = 'https://yourdomain.com';

export async function GET() {
  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Developer Portfolio - Writing</title>
  <subtitle>A showcase of my work as a software developer, featuring projects, blog posts, and more.</subtitle>
  <link href="${siteUrl}"/>
  <link href="${siteUrl}/feed.xml" rel="self"/>
  <id>${siteUrl}/feed.xml</id>
  <updated>${new Date().toISOString()}</updated>
  ${posts
    .map(
      (post) => `
  <entry>
    <title>${post.title}</title>
    <link href="${siteUrl}/writing/${post.slug}"/>
    <id>${siteUrl}/writing/${post.slug}</id>
    <updated>${new Date(post.date).toISOString()}</updated>
    <summary>${post.excerpt}</summary>
  </entry>`
    )
    .join('')}
</feed>`;

  return new NextResponse(atom, {
    headers: {
      'Content-Type': 'application/atom+xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
