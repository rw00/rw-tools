'use client';
import { List, Type } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    name: 'Count Characters',
    path: '/tools/count-char',
    icon: Type,
    description: 'Count characters and words in text'
  },
  {
    name: 'Sort Lines',
    path: '/tools/sort-lines',
    icon: List,
    description: 'Sort lines alphabetically'
  }
];

export default function SideBar() {
  return (
    <aside
      className="bg-gray-900 border-r border-primary transition-all duration-300 w-16 md:w-64 flex flex-col"
      aria-label="Navigation sidebar">
      <nav className="flex-1" role="navigation" aria-label="Tools navigation">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            href={tool.path}
            className="nav-link block px-4 py-2 hover:bg-primary text-primary-foreground text-sm transition-colors flex items-center justify-center md:justify-start"
            aria-label={`${tool.name} - ${tool.description}`}>
            <tool.icon size={20} className="md:mr-3" aria-hidden="true" />
            <span className="hidden md:inline">{tool.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
