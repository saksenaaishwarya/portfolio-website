'use client';

import { GraduationCap, MapPin } from 'lucide-react';

import { education } from '@/data/education';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';

export function Education() {
  return (
    <section id="education" className="section-anchor bg-muted/30 py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          description="A foundation built on rigor, creativity and constant curiosity."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <span className="absolute left-[20px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[24px]" />
          <div className="space-y-6">
            {education.map((item, index) => (
              <Reveal
                key={item.institution}
                delay={index * 0.06}
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-[7px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent/40 bg-background text-accent sm:left-[11px]">
                  <GraduationCap className="h-3.5 w-3.5" />
                </span>
                <div className="glass-card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold">
                      {item.institution}
                    </h3>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {item.start} — {item.end}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-primary">
                    {item.degree}
                    {item.field ? ` · ${item.field}` : ''}
                  </p>
                  {item.location && (
                    <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </p>
                  )}
                  {item.detail && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
