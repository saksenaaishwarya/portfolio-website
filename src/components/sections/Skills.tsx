'use client';

import {
  BrainCircuit,
  Code2,
  Layout,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { skillCategories } from '@/data/skills';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillsRadar = dynamic(() => import('@/components/sections/SkillsRadar'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] w-full items-center justify-center text-sm text-muted-foreground">
      Loading chart…
    </div>
  ),
});

const icons: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Layout,
  Wrench,
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-brand-gradient"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-anchor py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Skills"
          title="An interactive skill stack"
          description="A toolkit spanning machine learning, full-stack development and the platforms that ship it."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Tabs defaultValue={skillCategories[0].id}>
              <TabsList className="mx-auto flex lg:mx-0">
                {skillCategories.map((category) => {
                  const Icon = icons[category.icon] ?? Code2;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="gap-1.5"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="glass-card grid gap-5 p-6 sm:grid-cols-2">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>

          {/* Radar */}
          <Reveal delay={0.1}>
            <div className="glass-card p-6">
              <h3 className="text-center font-heading text-lg font-semibold">
                Strengths at a glance
              </h3>
              <div className="mt-2">
                <SkillsRadar />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
