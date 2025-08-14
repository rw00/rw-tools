'use client';
import { ChevronLeft, List, Menu, Type } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const tools = [
  { name: 'Count Characters', path: '/tools/count-char', icon: Type },
  { name: 'Sort Lines', path: '/tools/sort-lines', icon: List },
];

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-black dark:bg-gray-900 border-r border-purple-800 dark:border-purple-700 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'
        } flex flex-col`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="btn btn-ghost p-2 hover:bg-purple-900 dark:hover:bg-purple-800 flex items-center justify-center text-purple-400 dark:text-purple-300"
      >
        {collapsed ? <Menu /> : <ChevronLeft />}
      </button>
      <nav className="flex-1">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            href={tool.path}
            className="nav-link block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-800 text-purple-400 dark:text-purple-300 text-sm transition-colors flex"
          >
            {collapsed
              ? <tool.icon size={20} />
              : tool.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
