import type { ComponentType } from "react";
import {
  GitBranch,
  Github,
  Server,
  Layout,
  CheckCircle2,
  Rocket,
  Cog,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { devOpsProject, projects } from "@/lib/data";

const pipelineIcons: Record<string, ComponentType<{ className?: string }>> = {
  git: GitBranch,
  github: Github,
  jenkins: Cog,
  server: Server,
  layout: Layout,
  check: CheckCircle2,
  rocket: Rocket,
};

export function ProjectSection() {
  return (
    <section id="project" className="section-padding" aria-label="Projeler">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Öne Çıkan Proje"
          subtitle={devOpsProject.subtitle}
        />

        {/* Featured DevOps Project */}
        <Card className="glass-card mb-12 border-primary/20 glow-emerald overflow-hidden">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Featured
              </Badge>
              <Badge variant="outline">Active Development</Badge>
            </div>
            <CardTitle className="text-2xl sm:text-3xl mt-2">
              {devOpsProject.title}
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              {devOpsProject.description}
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Architecture cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {Object.values(devOpsProject.architecture).map((arch) => (
                <Card
                  key={arch.title}
                  className="border-white/10 bg-white/5 transition-all hover:border-primary/30"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-3">
                      {arch.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {arch.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="size-1 rounded-full bg-primary/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CI/CD Pipeline Flow */}
            <div>
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <Cog className="size-4 text-primary" />
                CI/CD Pipeline Akışı
              </h4>

              <div className="relative">
                {/* Connection line for desktop */}
                <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
                  {devOpsProject.pipelineSteps.map((step, index) => {
                    const Icon = pipelineIcons[step.icon] ?? Cog;
                    return (
                      <div
                        key={step.step}
                        className="relative flex flex-col items-center text-center group"
                      >
                        <div
                          className="flex size-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:glow-emerald"
                        >
                          <Icon className="size-6 text-primary" />
                        </div>
                        <span className="mt-2 text-xs font-mono text-primary">
                          {String(step.step).padStart(2, "0")}
                        </span>
                        <h5 className="mt-1 font-medium text-sm">
                          {step.title}
                        </h5>
                        <p className="mt-1 text-xs text-muted-foreground px-1">
                          {step.description}
                        </p>
                        {index < devOpsProject.pipelineSteps.length - 1 && (
                          <ArrowRight
                            className="hidden lg:block absolute -right-3 top-6 size-4 text-primary/40"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-2 sm:grid-cols-2">
              {devOpsProject.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                  {highlight}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Other Projects */}
        <h3 className="mb-6 text-xl font-semibold">Diğer Projeler</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <Card
                key={project.title}
                className="glass-card border-white/10 transition-all hover:border-primary/30 hover:-translate-y-1 hover:glow-emerald"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
