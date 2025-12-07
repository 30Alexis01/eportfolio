import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderBox from "@/components/PlaceholderBox";
import SkillTag from "@/components/SkillTag";
import { Globe, MapPin, Plane, Leaf } from "lucide-react";

export default function Mobility() {
  const mobilityTimeline = [
    {
      year: "2022",
      title: "Voyage académique",
      location: "Destination 1",
      description: "Description de l'expérience",
      type: "academic",
    },
    {
      year: "2023",
      title: "Stage international",
      location: "Destination 2",
      description: "Description du stage",
      type: "internship",
    },
    {
      year: "2024",
      title: "Échange académique",
      location: "Destination 3",
      description: "Description de l'échange",
      type: "exchange",
    },
    {
      year: "2025",
      title: "Projet futur",
      location: "Destination envisagée",
      description: "Mobilité prévue",
      type: "future",
    },
  ];

  const destinations = [
    {
      name: "Destination 1",
      country: "Pays",
      duration: "3 mois",
      skills: ["Adaptation", "Interculturalité"],
    },
    {
      name: "Destination 2",
      country: "Pays",
      duration: "6 mois",
      skills: ["Autonomie", "Leadership"],
    },
    {
      name: "Destination 3",
      country: "Pays",
      duration: "2 mois",
      skills: ["Collaboration", "Communication"],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Expériences internationales"
          title="Mobilité Internationale"
          description="Mes expériences à l'étranger et mes objectifs de mobilité"
        />

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Objectifs de mobilité
          </h2>
          <Card className="border border-border p-8 bg-card">
            <PlaceholderBox
              title="Vos objectifs de mobilité"
              description="Décrivez vos motivations, vos destinations prioritaires et vos attentes"
              icon={<Globe className="w-12 h-12 text-accent" />}
            />
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Timeline de mobilité
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent/20"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {mobilityTimeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10"></div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                      <Card className="border border-border p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-accent/10">
                            {item.type === "future" ? (
                              <Plane className="w-6 h-6 text-accent" />
                            ) : (
                              <MapPin className="w-6 h-6 text-accent" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-accent">
                              {item.year}
                            </p>
                            <h3 className="text-lg font-bold text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.location}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Destinations et expériences
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-foreground">
                    {destination.name}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-2">{destination.country}</p>
                <p className="text-sm text-accent font-semibold mb-4">
                  Durée : {destination.duration}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    Compétences développées :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.skills.map((skill) => (
                      <SkillTag
                        key={skill}
                        label={skill}
                        variant="secondary"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Langues et certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Langues parlées
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Français</p>
                  <p className="text-sm text-muted-foreground">Langue maternelle</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Anglais</p>
                  <PlaceholderBox
                    title="Niveau d'anglais"
                    description="Certifications (TOEIC, TOEFL, etc.)"
                    type="document"
                  />
                </div>
              </div>
            </Card>

            <Card className="border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Autres langues
              </h3>
              <PlaceholderBox
                title="Langues additionnelles"
                description="Allemand, Espagnol, Chinois, etc."
                type="generic"
              />
            </Card>
          </div>
        </section>

        {/* Carbon Footprint */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Empreinte carbone des mobilités
          </h2>
          <Card className="border border-border p-8 bg-accent/5">
            <div className="flex items-start gap-4">
              <Leaf className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Calcul de l'impact environnemental
                </h3>
                <p className="text-muted-foreground mb-4">
                  Analysez l'impact carbone de vos déplacements internationaux et
                  explorez des alternatives durables.
                </p>
                <PlaceholderBox
                  title="Analyse de l'empreinte carbone"
                  description="Données de mobilité et calcul d'impact"
                  type="document"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Internships */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Stages internationaux
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Stage 1
              </h3>
              <p className="text-muted-foreground mb-4">
                Description du stage international
              </p>
              <PlaceholderBox
                title="Documents du stage"
                description="Rapport, attestations, certificats"
                type="document"
              />
            </Card>

            <Card className="border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Stage 2
              </h3>
              <p className="text-muted-foreground mb-4">
                Description du stage international
              </p>
              <PlaceholderBox
                title="Documents du stage"
                description="Rapport, attestations, certificats"
                type="document"
              />
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
