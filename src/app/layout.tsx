import Sidebar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'RW Tools',
  description:
    'Trusted tools that will never collect, send, or share your data.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <TopBar />
            <main className="flex-1 overflow-auto p-4 bg-gray-950" role="main">
              <div className="container">{children}</div>
            </main>
            <footer
              className="bg-gray-900 border-t border-gray-800 py-3 px-4 text-center"
              role="contentinfo">
              <Link
                href="https://linkedin.com/in/raf-w"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Raf W's LinkedIn profile">
                <span className="text-gray-400 font-bold text-xl tracking-wider font-mono">
                  RW
                </span>
              </Link>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
