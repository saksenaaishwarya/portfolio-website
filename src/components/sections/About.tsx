'use client';

import {
  BadgeCheck,
  GitBranch,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

import { profile } from '@/data/profile';
import { stats } from '@/data/achievements';
import { focusAreas } from '@/data/skills';
import { Reveal, RevealGroup, itemVariants } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Counter } from '@/components/animations/Counter';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const statIcons: Record<string, LucideIcon> = {
  BadgeCheck,
  Trophy,
  GitBranch,
  ShieldCheck,
};

export function About() {
  return (
    <section id="about" className="section-anchor py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About"
          title="Where research meets engineering"
          description="A story of curiosity, discipline and craft — equal parts code, research and stage."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Narrative */}
          <div className="space-y-5">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 pt-2">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="outline" className="py-1">
                    {area}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <RevealGroup className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? BadgeCheck;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-card group relative overflow-hidden p-5"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <Icon className="h-6 w-6 text-accent" />
                  <p className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
