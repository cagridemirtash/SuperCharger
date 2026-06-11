import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding bg-white/[0.02]"
      aria-label="Deneyim"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Deneyim"
          subtitle="Son kullanıcı desteğinden sistem mühendisliğine uzanan yolculuk."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent sm:left-8" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 top-6 size-3 rounded-full border-2 ${
                    exp.current
                      ? "border-primary bg-primary shadow-[0_0_12px] shadow-primary/50"
                      : "border-white/30 bg-background"
                  }`}
                />

                <div
                  className="glass-card rounded-xl border border-white/10 p-6 transition-all hover:border-primary/30 hover:translate-x-1"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="size-4 text-primary" />
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            Aktif
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 text-muted-foreground">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-primary font-medium">{exp.period}</p>
                      {exp.location && (
                        <p className="mt-1 flex items-center gap-1 text-muted-foreground justify-end">
                          <MapPin className="size-3" />
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
