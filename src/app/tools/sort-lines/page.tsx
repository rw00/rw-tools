'use client';
import { useState } from 'react';

export default function SortLinesPage() {
  const [text, setText] = useState('');
  const sortLines = (text: string) =>
    text
      .trim()
      .split('\n')
      .filter((line) => line.trim())
      .sort((a, b) => a.localeCompare(b))
      .join('\n');

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="card-header">
        <h1 className="card-title text-gray-100">Sort Lines</h1>
      </div>
      <div className="card-content">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="textarea mb-4 focus:border-primary"
          placeholder="Type or paste lines here..."
          aria-label="Text to sort"
        />
        <button
          onClick={() => setText(sortLines(text))}
          className="btn btn-primary"
          disabled={!text.trim()}
          aria-label="Sort the lines alphabetically">
          Sort
        </button>
      </div>
    </div>
  );
}
