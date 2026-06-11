import { GraduationCap, MapPin, Award, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { aboutContent, education, certifications } from "@/lib/data";

const highlightIcons = {
  "Toplam Deneyim": Clock,
  "Eğitim": GraduationCap,
  "Konum": MapPin,
  "Sertifikalar": Award,
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-label="Hakkımda">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Hakkımda"
          subtitle="Altyapı, otomasyon ve yazılım — tek bir akışta."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {aboutContent.highlights.map((item) => {
              const Icon =
                highlightIcons[item.label as keyof typeof highlightIcons] ??
                Clock;
              return (
                <Card
                  key={item.label}
                  className="glass-card border-white/10 transition-all hover:border-primary/30 hover:glow-emerald"
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-lg">Eğitim</h3>
            {education.map((edu) => (
              <Card
                key={edu.school}
                className="glass-card border-white/10"
              >
                <CardContent className="p-4">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.school}
                  </p>
                  <p className="text-xs text-primary mt-1">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">Sertifikalar</h3>
            <div className="space-y-2">
              {certifications.slice(0, 4).map((cert) => (
                <Card
                  key={cert.name}
                  className="glass-card border-white/10 transition-colors hover:border-primary/20"
                >
                  <CardContent className="flex items-center justify-between p-3">
                    <div>
                      <p className="text-sm font-medium">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs text-primary">{cert.date}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
