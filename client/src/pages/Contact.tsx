import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Restons en contact"
          title="Me contacter"
          description="N'hésitez pas à me contacter pour toute question ou opportunité"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="border border-border p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">
                  [votre.email@enseeiht.fr]
                </p>
              </div>
            </div>
          </Card>

          <Card className="border border-border p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Téléphone</h3>
                <p className="text-sm text-muted-foreground">[+33 X XX XX XX XX]</p>
              </div>
            </div>
          </Card>

          <Card className="border border-border p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Localisation</h3>
                <p className="text-sm text-muted-foreground">Toulouse, France</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              ENSEEIHT
            </p>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Disponibilité */}
          <Card className="border border-border p-8">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Disponibilité
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Jours de la semaine</p>
                <p className="text-sm text-muted-foreground">
                  Lundi - Vendredi : 9h - 18h
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Temps de réponse</p>
                <p className="text-sm text-muted-foreground">
                  24-48 heures généralement
                </p>
              </div>
            </div>
          </Card>

          {/* Right Column - Informations supplémentaires */}
          <Card className="border border-border p-8 bg-accent/5">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Informations supplémentaires
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card transition-colors"
              >
                <span className="text-accent font-semibold">LinkedIn</span>
                <span className="text-muted-foreground text-sm">
                  Profil professionnel
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card transition-colors"
              >
                <span className="text-accent font-semibold">GitHub</span>
                <span className="text-muted-foreground text-sm">
                  Projets et code
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-card transition-colors"
              >
                <span className="text-accent font-semibold">Email</span>
                <span className="text-muted-foreground text-sm">
                  Contact direct
                </span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
