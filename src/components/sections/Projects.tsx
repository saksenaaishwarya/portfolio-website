'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Search,
  Sparkles,
  Star,
  Target,
  Zap,
} from 'lucide-react';

import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '@/data/projects';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type Filter = 'All' | ProjectCategory;

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card flex flex-col overflow-hidden"
    >
      <div className="relative flex items-center justify-between border-b border-border bg-gradient-to-br from-primary/5 to-accent/5 p-5">
        <span className="font-heading text-base font-semibold">
          {project.title}
        </span>
        {project.role ? (
          <Badge variant="accent">{project.role}</Badge>
        ) : (
          <Badge variant="secondary">{project.category}</Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-medium text-accent">{project.tagline}</p>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-[11px]">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-[11px]">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 pt-1">
          <Button size="sm" variant="outline" onClick={() => onOpen(project)}>
            Details
          </Button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured) ?? projects[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="section-anchor py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Projects"
          title="Things I’ve designed & shipped"
          description="Real work from research, open source and late-night builds — pulled straight from GitHub."
        />

        {/* Featured spotlight */}
        <Reveal className="mt-14">
          <div className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Sparkles className="h-3.5 w-3.5" /> Featured project
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-1 font-medium text-accent">
                  {featured.tagline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={() => setSelected(featured)}>
                    View case study
                  </Button>
                  {featured.demo && (
                    <Button asChild variant="outline">
                      <a
                        href={featured.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <Target className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Challenge
                  </p>
                  <p className="mt-1 text-sm">{featured.challenge}</p>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <Zap className="h-5 w-5 text-accent" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Impact
                  </p>
                  <p className="mt-1 text-sm">{featured.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
                  filter === category
                    ? 'border-transparent bg-brand-gradient text-white shadow'
                    : 'border-border text-muted-foreground hover:border-accent/40 hover:text-foreground',
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              className="pl-9"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects match that search. Try a different keyword.
          </p>
        )}
      </div>

      {/* Detail modal */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{selected.category}</Badge>
                  {selected.role && (
                    <Badge variant="accent">{selected.role}</Badge>
                  )}
                  {selected.featured && (
                    <span className="inline-flex items-center gap-1 text-xs text-accent">
                      <Star className="h-3.5 w-3.5 fill-accent" /> Featured
                    </span>
                  )}
                </div>
                <DialogTitle className="mt-2 text-2xl">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-accent">
                  {selected.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5">
                <p className="text-sm text-muted-foreground">
                  {selected.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <Target className="h-4 w-4 text-primary" /> Challenge
                    </p>
                    <p className="mt-1.5 text-sm">{selected.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <Zap className="h-4 w-4 text-accent" /> Impact
                    </p>
                    <p className="mt-1.5 text-sm">{selected.impact}</p>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Button asChild>
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" /> View code
                    </a>
                  </Button>
                  {selected.demo && (
                    <Button asChild variant="outline">
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
