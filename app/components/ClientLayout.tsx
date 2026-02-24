'use client';

import { SoundProvider } from '@/components/SoundContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { PageTransition } from '@/components/layout/PageTransition';
import { ScrollButton } from '@/components/layout/ScrollButton';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';
import '@/styles/theme.css';

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isKeystatic = pathname?.startsWith('/keystatic');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cartograph:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC143C" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom Feed" href="/feed.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="skip-link"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
        >
          Skip to content
        </a>
        content
        <SoundProvider>
          <ThemeProvider>
            {!isKeystatic && <Navigation />}
            <PageTransition>
              <main
                id="main-content"
                style={{ minHeight: isKeystatic ? '100vh' : 'calc(100vh - 200px)' }}
              >
                {children}
              </main>
            </PageTransition>
            {!isKeystatic && (
              <>
                <ScrollButton />
                <Footer />
              </>
            )}
            <Toaster position="bottom-right" theme="dark" closeButton />
          </ThemeProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
