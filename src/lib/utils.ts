import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes a public asset path with the configured basePath so assets resolve
 * correctly when the site is served from a GitHub Pages project subpath
 * (e.g. /portfolio-website). Pass a root-relative path like "/resume.pdf".
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!path.startsWith('/')) path = `/${path}`;
  return `${base}${path}`;
}
