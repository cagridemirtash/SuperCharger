"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const contactLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "hanificagridemirtas",
      href: siteConfig.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "cagridemirtash",
      href: siteConfig.github,
    },
    {
      icon: Mail,
      label: "E-posta",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Konum",
      value: siteConfig.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white/[0.02]"
      aria-label="İletişim"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="İletişim"
          subtitle="Bir proje, fikir veya iş birliği için ulaşabilirsiniz."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <Card
                key={link.label}
                className="glass-card border-white/10 transition-all hover:border-primary/30"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <link.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="font-medium">{link.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-card border-white/10">
            <CardContent className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Send className="size-6" />
                  </div>
                  <h3 className="font-semibold text-lg">Mesajınız alındı!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    En kısa sürede size dönüş yapacağım.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Adınız"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Mesajınızı yazın..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="size-4" />
                    Gönder
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Form şu an demo modunda — backend entegrasyonu için TODO.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
