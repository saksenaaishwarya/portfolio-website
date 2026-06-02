'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, FileText, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { profile } from '@/data/profile';
import { asset } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/animations/TypingText';
import { ParticleField } from '@/components/animations/ParticleField';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ParticleField className="absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[5%] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hi, I’m{' '}
              <span className="text-gradient bg-[length:200%_auto] animate-gradient-pan">
                {profile.firstName}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 flex items-center justify-center gap-2 font-mono text-lg text-accent sm:text-2xl lg:justify-start"
            >
              <span className="text-muted-foreground">&gt;</span>
              <TypingText words={[...profile.roles]} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
            >
              <Button asChild size="lg">
                <Link href="/resume" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View Résumé
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                {profile.location}
              </span>
              <span className="hidden h-4 w-px bg-border sm:inline-block" />
              {profile.socials.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[2rem] bg-brand-gradient opacity-30 blur-2xl" />
            <div className="gradient-ring animate-float rounded-[2rem]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl">
                <Image
                  src={asset('/aishwarya-profile.jpg')}
                  alt={`${profile.name} — portrait`}
                  width={900}
                  height={1100}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-lg sm:flex"
            >
              <Sparkles className="h-5 w-5 text-accent" />
              <div className="text-left">
                <p className="text-sm font-semibold leading-none">SheFi Scholar</p>
                <p className="text-xs text-muted-foreground">GSSoC ’26 · ML Research</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
