import Sidebar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RW Tools',
  description: 'Trusted tools that will never collect, send, or share your data.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <TopBar />
            <main className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-950">
              <div className="container">
                {children}
              </div>
            </main>
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-3 px-4 text-center">
              <span className="text-gray-600 dark:text-gray-400 font-bold text-xl tracking-wider font-mono">RW</span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
