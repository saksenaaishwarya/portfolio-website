import type { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';

import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { ResumeActions } from '@/components/layout/PrintButton';

export const metadata: Metadata = {
  title: 'Résumé',
  description: `Résumé of ${profile.name} — ML Researcher & Software Engineer.`,
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 border-b border-border pb-1 font-heading text-sm font-bold uppercase tracking-widest text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10 print:bg-white print:py-0">
      <div className="mx-auto max-w-3xl px-4">
        <ResumeActions />

        <article className="rounded-2xl bg-card p-8 shadow-sm print:rounded-none print:p-0 print:shadow-none sm:p-10">
          {/* Header */}
          <header className="border-b border-border pb-5">
            <h1 className="font-heading text-3xl font-bold">{profile.name}</h1>
            <p className="mt-1 font-medium text-primary">
              Machine Learning Researcher · Software Engineer · Open-Source Developer
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" /> {profile.email}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </span>
              {profile.socials
                .filter((s) => ['GitHub', 'LinkedIn'].includes(s.label))
                .map((s) => (
                  <span key={s.label}>
                    {s.label}: {s.handle}
                  </span>
                ))}
            </div>
          </header>

          {/* Summary */}
          <Section title="Summary">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <div className="space-y-4">
              {experiences
                .filter((e) => e.type === 'work')
                .map((exp) => (
                  <div key={exp.company + exp.role}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="text-sm font-semibold">
                        {exp.role} — {exp.company}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {exp.start} – {exp.end}
                      </span>
                    </div>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-muted-foreground">
                      {exp.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Selected Projects">
            <div className="space-y-2">
              {projects.slice(0, 5).map((p) => (
                <div key={p.slug} className="text-sm">
                  <span className="font-semibold">{p.title}</span>
                  <span className="text-muted-foreground">
                    {' '}
                    — {p.tagline}. {p.tech.join(', ')}.
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <div className="space-y-1 text-sm">
              {skillCategories.map((cat) => (
                <p key={cat.id}>
                  <span className="font-semibold">{cat.label}:</span>{' '}
                  <span className="text-muted-foreground">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </p>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="space-y-2">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm"
                >
                  <span>
                    <span className="font-semibold">{edu.institution}</span>
                    {edu.field ? ` — ${edu.degree}, ${edu.field}` : ` — ${edu.degree}`}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {edu.start} – {edu.end}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <ul className="list-disc space-y-0.5 pl-5 text-sm text-muted-foreground">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  {cert.title} — {cert.issuer}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </div>
  );
}
