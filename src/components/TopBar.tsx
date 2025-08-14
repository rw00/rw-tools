'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function TopBar() {
  return (
    <header
      className="h-14 border-b bg-gray-900 flex items-center justify-between px-4"
      role="banner">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-100 hover:text-primary transition-colors"
          aria-label="Go to home page">
          Home
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/rw00/rw-tools"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View project on GitHub">
          <Image
            src="/vibe-coded.png"
            alt="Vibe Coded"
            width={28}
            height={28}
          />
        </Link>
      </div>
    </header>
  );
}
