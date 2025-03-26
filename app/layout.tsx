import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'Godfrey Siaga - Full Stack Developer & Designer',
  description: 'Portfolio of Godfrey Siaga - Innovative Full Stack Solutions & Artistic Design',
  keywords: ['Full Stack Developer', 'Web Designer', 'Software Engineer', 'React Developer', 'Next.js Developer'],
  authors: [{ name: 'Godfrey Siaga' }],
  creator: 'Godfrey Siaga',
  publisher: 'Godfrey Siaga',
  robots: 'index, follow',
  metadataBase: new URL('https://godfreysiaga.com'), // Replace with your actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://godfreysiaga.com', // Replace with your actual domain
    title: 'Godfrey Siaga - Full Stack Developer & Designer',
    description: 'Portfolio of Godfrey Siaga - Innovative Full Stack Solutions & Artistic Design',
    siteName: 'Godfrey Siaga Portfolio',
    images: [
      {
        url: '/og-image.png', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Godfrey Siaga - Full Stack Developer & Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godfrey Siaga - Full Stack Developer & Designer',
    description: 'Portfolio of Godfrey Siaga - Innovative Full Stack Solutions & Artistic Design',
    images: ['/logo.png'], // Add your Twitter card image
  },
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}