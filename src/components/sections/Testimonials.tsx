'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Button } from '@/components/ui/button';

/**
 * Reusable testimonials carousel. Renders nothing while `testimonials` is empty
 * (the default), so the section stays hidden until quotes are added in
 * src/data/testimonials.ts.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-anchor py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words"
          description="What mentors and collaborators say about working together."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="glass-card relative p-8 text-center">
            <Quote className="mx-auto h-10 w-10 text-primary/20" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <p className="text-lg text-foreground">
                  “{current.quote}”
                </p>
                <footer className="mt-6">
                  <p className="font-semibold">{current.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.role}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="mt-6 flex items-center justify-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
