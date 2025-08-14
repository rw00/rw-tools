'use client';
import { useState } from 'react';

export default function CountCharPage() {
  const [text, setText] = useState('');

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="card-header">
        <h1 className="card-title text-gray-900 dark:text-gray-100">Count Characters</h1>
      </div>
      <div className="card-content">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="textarea mb-4 focus:border-purple-400"
          placeholder="Type or paste your text here..."
        />
        <div className="text-sm text-gray-800 dark:text-gray-200">
          Characters: <strong className="text-purple-700 dark:text-purple-400">{text.length}</strong>
        </div>
      </div>
    </div>
  );
}
