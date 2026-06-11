import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding bg-white/[0.02]"
      aria-label="Yetenekler"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Yetenekler"
          subtitle="Altyapı, otomasyon, backend ve frontend — kategorize edilmiş yetkinlik seti."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="glass-card border-white/10 transition-all hover:border-primary/20"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-white/10 bg-white/5 text-xs transition-colors hover:border-primary/30 hover:bg-primary/10"
                    >
                      {skill}
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
