import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b', // Este será el valor predeterminado (modo oscuro)
}

export const metadata: Metadata = {
  title: 'Sitio web oficial - Motley Money',
  description:
    'Nim is a free and open-source personal website template built with Next.js 15, React 19 and Motion-Primitives.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta tag para theme-color */}
        <meta name="theme-color" id="theme-color" content="#09090b" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>

        {/* Script para actualizar el theme-color dinámicamente */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const themeColorMeta = document.getElementById('theme-color');
              const updateThemeColor = () => {
                const isDarkMode = document.documentElement.classList.contains('dark');
                themeColorMeta.setAttribute('content', isDarkMode ? '#09090b' : '#ffffff');
              };

              // Actualizar el theme-color al cargar la página
              updateThemeColor();

              // Observar cambios en el tema
              const observer = new MutationObserver(updateThemeColor);
              observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class'],
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
