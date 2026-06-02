'use client';

import Link from 'next/link';
import { ArrowLeft, Printer } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ResumeActions() {
  return (
    <div className="no-print mb-8 flex items-center justify-between">
      <Button asChild variant="outline" size="sm">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </Button>
      <Button size="sm" onClick={() => window.print()}>
        <Printer className="h-4 w-4" />
        Print / Save as PDF
      </Button>
    </div>
  );
}
