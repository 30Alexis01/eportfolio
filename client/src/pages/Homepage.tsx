import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PlaceholderBox from "@/components/PlaceholderBox";
import SkillTag from "@/components/SkillTag";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                  <img
                    src="https://placehold.co/320x320/E8EEF5/003A6E?text=Photo+Profil"
                    alt="Photo de profil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Profile Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  [PRÉNOM NOM]
                </h1>
                <p className="text-xl text-accent font-semibold">
                  Élève-ingénieur ENSEEIHT
                </p>
                <p className="text-lg text-muted-foreground">
                  Double diplôme ENSTBB (Biotechnologies & Informatique)
                </p>
              </div>

              {/* Professional Statement */}
              <div className="bg-card border border-border rounded-lg p-6">
                <PlaceholderBox
                  title="Accroche Professionnelle (UVP)"
                  description="Votre proposition de valeur unique"
                  type="generic"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <Download className="w-5 h-5" />
                  CV Français
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <Download className="w-5 h-5" />
                  CV English
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <Mail className="w-5 h-5" />
                  Me contacter
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">5+</p>
              <p className="text-muted-foreground">Projets académiques</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">2</p>
              <p className="text-muted-foreground">Stages professionnels</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">3</p>
              <p className="text-muted-foreground">Mobilités internationales</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-muted-foreground">Compétences techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Compétences principales
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <SkillTag label="Python" />
            <SkillTag label="Java" />
            <SkillTag label="OCaml" />
            <SkillTag label="Bioinformatique" />
            <SkillTag label="Biotechnologies" />
            <SkillTag label="Leadership" variant="secondary" />
            <SkillTag label="Gestion de projet" variant="secondary" />
            <SkillTag label="Communication" variant="secondary" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Découvrez mon parcours complet
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explorez mes projets académiques, mes expériences internationales,
            mes engagements sociaux et mon projet de carrière professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              Parcours Ingénieur
            </Button>
            <Button variant="outline" size="lg">
              Projet de Carrière
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
