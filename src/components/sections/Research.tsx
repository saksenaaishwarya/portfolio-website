'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FlaskConical, GraduationCap, Microscope, Quote } from 'lucide-react';

import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const research = {
  title: 'Applied Machine-Learning Research',
  institution: 'Indian Institute of Information Technology, Ranchi',
  advisor: 'Dr. Gaurav Sundaram',
  period: 'Apr 2026 – Present',
  status: 'Ongoing',
  abstract:
    'As a Research Intern at IIIT Ranchi, I work on applied machine-learning methods under the guidance of Dr. Gaurav Sundaram. The work centres on designing rigorous experiments, building reproducible data and modelling pipelines, and translating research questions into implementations that hold up to real-world data.',
  more: 'My research interests sit at the meeting point of industrial research and engineering — using machine learning to make everyday decisions safer and smarter, while keeping experiments measurable, explainable and reproducible. This internship lets me pair academic rigor with hands-on Python implementation, the same blend that drives my open-source and product work.',
  themes: [
    'Applied Machine Learning',
    'Experiment Design',
    'Reproducible Pipelines',
    'Industrial Research',
  ],
};

export function Research() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="research" className="section-anchor bg-muted/30 py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Research"
          title="Curiosity, made rigorous"
          description="Current academic research bridging machine-learning theory and practical implementation."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <article className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" />

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{research.status}</Badge>
              <span className="text-sm text-muted-foreground">
                {research.period}
              </span>
            </div>

            <h3 className="mt-4 font-heading text-2xl font-bold">
              {research.title}
            </h3>

            <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent" />
                {research.institution}
              </span>
              <span className="inline-flex items-center gap-2">
                <Microscope className="h-4 w-4 text-accent" />
                Advised by {research.advisor}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {research.abstract}
            </p>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  <span className="mt-4 block">{research.more}</span>
                </motion.p>
              )}
            </AnimatePresence>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? 'Read less' : 'Read more'}
              </Button>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <FlaskConical className="h-4 w-4 text-accent" />
                Publications forthcoming
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {research.themes.map((theme) => (
                <Badge key={theme} variant="secondary">
                  {theme}
                </Badge>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
