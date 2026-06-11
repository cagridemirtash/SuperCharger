import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig, heroRoles, heroBadges } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Giriş"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-emerald-500/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-violet-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-cyan-500/5 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              <Zap className="size-3" />
              Online & Charged
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">{siteConfig.name}</span>
            <span className="mt-2 block text-gradient text-3xl sm:text-4xl lg:text-5xl">
              aka {siteConfig.nickname}
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroRoles.map((role) => (
              <span
                key={role}
                className="text-lg text-muted-foreground sm:text-xl"
              >
                {role}
                {role !== heroRoles[heroRoles.length - 1] && (
                  <span className="mx-2 text-primary">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <Badge
                key={badge}
                variant="outline"
                className="border-white/10 bg-white/5 hover:border-primary/30 transition-colors"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" />
                LinkedIn&apos;e Git
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#project">
                Projelerimi Gör
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#contact">
                <Mail className="size-4" />
                İletişime Geç
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <span className="text-border">|</span>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
