import type { Metadata } from 'next';
import { ClientLayout } from './components/ClientLayout';

export const metadata: Metadata = {
  title: 'Rajul Amsal | Full-Stack Developer',
  description:
    'Full-stack developer specializing in React, Next.js, and TypeScript. Building innovative web applications with modern technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
