import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrueNorth Research Hub - Canada\'s Comprehensive Research Database',
  description: 'Every fact sourced, every source accessible. TrueNorth is Canada\'s most comprehensive research platform for politics, economics, and public policy.',
  keywords: 'Canada, research, statistics, politics, economics, data, sources',
  authors: [{ name: 'TrueNorth Research Hub' }],
  openGraph: {
    title: 'TrueNorth Research Hub',
    description: 'Canada\'s most comprehensive research database',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
