'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/animations/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Add a short subject'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type FormValues = z.infer<typeof schema>;

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus('loading');

    // Preferred path: Formspree (works on static hosting). Falls back to a
    // mailto: link so the form is functional with zero configuration.
    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('success');
        reset();
      } catch {
        setStatus('error');
      }
      return;
    }

    const body = encodeURIComponent(
      `Hi Aishwarya,\n\n${values.message}\n\n— ${values.name} (${values.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${body}`;
    setStatus('success');
    reset();
  };

  return (
    <section id="contact" className="section-anchor py-24 sm:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something together"
          description="Recruiting, research, collaboration or just a hello — my inbox is always open."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: socials */}
          <Reveal className="space-y-6">
            <p className="text-base text-muted-foreground sm:text-lg">
              I’m currently {profile.availability.toLowerCase()}. Reach out
              through the form or any of the channels below and I’ll get back to
              you soon.
            </p>
            <div className="space-y-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent transition-colors group-hover:bg-accent/10">
                    <social.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">
                      {social.label}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {social.handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="glass-card p-6 sm:p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-3 py-12 text-center"
                >
                  <CheckCircle2 className="h-14 w-14 text-accent" />
                  <h3 className="font-heading text-xl font-semibold">
                    Message on its way!
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out — I’ll reply as soon as I can. In
                    the meantime, feel free to connect on LinkedIn.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus('idle')}
                    className="mt-2"
                  >
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What’s this about?"
                      aria-invalid={!!errors.subject}
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <p className="text-xs text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me a little about it…"
                      aria-invalid={!!errors.message}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or email{' '}
                      {profile.email}.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
