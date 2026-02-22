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
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Developer Portfolio - Writing</title>
    <description>A showcase of my work as a software developer, featuring projects, blog posts, and more.</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/writing/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/writing/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
