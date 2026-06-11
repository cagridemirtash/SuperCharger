import { Zap } from "lucide-react";
import { personalBrand } from "@/lib/data";

function SoundwaveBars() {
  const delays = [0, 0.1, 0.2, 0.3, 0.15, 0.25, 0.35, 0.1, 0.2, 0.3, 0.15, 0.25];

  return (
    <div className="flex items-center justify-center gap-1 h-16" aria-hidden="true">
      {delays.map((delay, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-primary/40 to-primary animate-soundwave"
          style={{
            animationDelay: `${delay}s`,
            height: `${20 + (i % 3) * 15}%`,
          }}
        />
      ))}
    </div>
  );
}

function SignalLine() {
  return (
    <div className="relative h-px w-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-signal-flow" />
    </div>
  );
}

export function PersonalBrandSection() {
  return (
    <section
      id="brand"
      className="section-padding relative overflow-hidden"
      aria-label="Kişisel Marka"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] rounded-full bg-violet-500/10 blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary glow-emerald animate-float">
            <Zap className="size-7" />
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">{personalBrand.title}</span>
        </h2>

        <SignalLine />

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {personalBrand.description}
        </p>

        <div className="mt-10">
          <SoundwaveBars />
        </div>

        <div className="mt-8 flex justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-pulse-glow" />
            Signal Flow
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-violet-400 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
            Uptime Mindset
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse-glow" style={{ animationDelay: "1s" }} />
            Charged Output
          </span>
        </div>
      </div>
    </section>
  );
}
