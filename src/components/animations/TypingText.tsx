'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

/** Cycles through `words` with a typewriter effect and a blinking caret. */
export function TypingText({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span>{words[index % words.length].substring(0, subIndex)}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-current animate-blink"
      />
    </span>
  );
}
