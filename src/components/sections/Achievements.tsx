'use client';

import {
  Award,
  BadgeCheck,
  GitBranch,
  Music,
  ShieldCheck,
  Sparkles,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { achievements } from '@/data/achievements';
import { certifications } from '@/data/certifications';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal, RevealGroup, itemVariants } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/badge';

const icons: Record<string, LucideIcon> = {
  Sparkles,
  GitBranch,
  Trophy,
  Award,
  ShieldCheck,
  Music,
  BadgeCheck,
};

export function Achievements() {
  return (
    <section id="achievements" className="section-anchor py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & milestones"
          description="Scholarships, competitions, leadership and the arts — the experiences that shaped how I work."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = icons[item.icon] ?? Award;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="glass-card group flex flex-col p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient/10 text-accent ring-1 ring-accent/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  {item.year && (
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.year}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <Badge variant="outline" className="mt-4 w-fit">
                  {item.tag}
                </Badge>
              </motion.div>
            );
          })}
        </RevealGroup>

        {/* Certifications strip */}
        <Reveal className="mt-12">
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-accent" />
              <h3 className="font-heading text-lg font-semibold">
                Certifications
              </h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
