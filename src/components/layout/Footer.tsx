import { profile } from '@/data/profile';
import { navItems } from '@/data/navigation';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-tight py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-heading text-lg font-bold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm text-white">
                AS
              </span>
              <span className="text-gradient">{profile.name}</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              {profile.headline}. Based in {profile.location}.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <social.icon className="h-[1.1rem] w-[1.1rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, Tailwind CSS &amp; Framer Motion · Designed with
            intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
