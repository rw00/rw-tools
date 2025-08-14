'use client';
import { useState } from 'react';

export default function CountCharPage() {
  const [text, setText] = useState('');
  const countWords = (text: string) =>
    text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="card-header">
        <h1 className="card-title text-gray-100">Count Characters</h1>
      </div>
      <div className="card-content">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="textarea mb-4 focus:border-primary"
          placeholder="Type or paste your text here..."
          aria-label="Text to count characters"
        />
        <div className="text-sm text-gray-200">
          Characters: <strong className="text-primary">{text.length}</strong>
          {text.length > 0 && (
            <>
              <br />
              <span className="text-xs text-gray-400">
                Words:{' '}
                <strong className="text-primary">{countWords(text)}</strong>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
