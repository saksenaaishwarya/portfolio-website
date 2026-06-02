'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, ChevronDown, HeartHandshake, MapPin } from 'lucide-react';

import { experiences, type ExperienceItem } from '@/data/experience';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

function TimelineCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const Icon = item.type === 'work' ? Briefcase : HeartHandshake;

  return (
    <Reveal direction="up" delay={index * 0.04} className="relative pl-12 sm:pl-16">
      {/* Node */}
      <span
        className={cn(
          'absolute left-[7px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 sm:left-[11px]',
          item.type === 'work'
            ? 'border-primary/40 bg-background text-primary'
            : 'border-accent/40 bg-background text-accent',
        )}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>

      <div className="glass-card overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/40"
        >
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
              <span className="text-muted-foreground">·</span>
              <span className="font-medium text-primary">{item.company}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span>
                {item.start} — {item.end}
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              )}
            </div>
          </div>
          <ChevronDown
            className={cn(
              'mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform',
              open && 'rotate-180',
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 border-t border-border px-5 pb-5 pt-4">
                <p className="text-sm text-muted-foreground">{item.summary}</p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-anchor bg-muted/30 py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building & leading"
          description="From ML research and software engineering to years of disciplined service and leadership."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line */}
          <span className="absolute left-[20px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-[24px]" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <TimelineCard key={item.company + item.role} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
