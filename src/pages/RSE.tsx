import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderBox from "@/components/PlaceholderBox";
import SkillTag from "@/components/SkillTag";
import { Heart, Users, Leaf, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RSE() {
  const volunteerActivities = [
    {
      id: 1,
      title: "Activité bénévole 1",
      organization: "Organisation",
      duration: "2023-2024",
      description: "Description de l'activité bénévole",
      impact: "Impact social",
    },
    {
      id: 2,
      title: "Activité bénévole 2",
      organization: "Organisation",
      duration: "2024",
      description: "Description de l'activité bénévole",
      impact: "Impact environnemental",
    },
  ];

  const associations = [
    {
      id: 1,
      name: "Association 1",
      role: "Rôle/Responsabilité",
      duration: "2023-2024",
      description: "Description de l'engagement",
    },
    {
      id: 2,
      name: "Association 2",
      role: "Rôle/Responsabilité",
      duration: "2024",
      description: "Description de l'engagement",
    },
    {
      id: 3,
      name: "Association 3",
      role: "Rôle/Responsabilité",
      duration: "2024-2025",
      description: "Description de l'engagement",
    },
  ];

  const softSkills = [
    "Empathie",
    "Responsabilité",
    "Engagement",
    "Collaboration",
    "Écoute active",
    "Esprit d'équipe",
    "Conscience sociale",
    "Durabilité",
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Responsabilité sociale"
          title="Engagement RSE & Civic"
          description="Mes activités bénévoles, engagements associatifs et impact social"
        />

        <Tabs defaultValue="volunteer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="volunteer" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Bénévolat</span>
            </TabsTrigger>
            <TabsTrigger value="associations" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Associations</span>
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              <span className="hidden sm:inline">Impact</span>
            </TabsTrigger>
          </TabsList>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Activités bénévoles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-accent font-semibold">
                        {activity.organization}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {activity.description}
                  </p>
                  <div className="bg-accent/5 rounded p-3 mb-4">
                    <p className="text-sm font-semibold text-foreground">
                      Impact : {activity.impact}
                    </p>
                  </div>
                  <PlaceholderBox
                    title="Certificats & attestations"
                    description="Preuves de participation"
                    type="document"
                  />
                </Card>
              ))}
            </div>

            {/* Add more volunteer activities */}
            <Card className="border border-border p-6 border-dashed">
              <PlaceholderBox
                title="Ajouter d'autres activités bénévoles"
                description="Décrivez vos autres engagements"
                type="generic"
              />
            </Card>
          </TabsContent>

          {/* Associations Tab */}
          <TabsContent value="associations" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Engagements associatifs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {associations.map((assoc) => (
                <Card
                  key={assoc.id}
                  className="border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground">
                        {assoc.name}
                      </h4>
                      <p className="text-sm text-accent font-semibold">
                        {assoc.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {assoc.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {assoc.description}
                  </p>
                  <PlaceholderBox
                    title="Réalisations & projets"
                    description="Événements, initiatives, résultats"
                    type="document"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Impact social et environnemental
              </h3>
              <Card className="border border-border p-8 bg-accent/5">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-accent" />
                      <h4 className="text-lg font-bold text-foreground">
                        Impact social
                      </h4>
                    </div>
                    <PlaceholderBox
                      title="Bénéficiaires et résultats"
                      description="Nombre de personnes aidées, projets réalisés"
                      type="generic"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Leaf className="w-6 h-6 text-accent" />
                      <h4 className="text-lg font-bold text-foreground">
                        Impact environnemental
                      </h4>
                    </div>
                    <PlaceholderBox
                      title="Actions durables"
                      description="Projets écologiques, initiatives vertes"
                      type="generic"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Compétences comportementales développées
              </h3>
              <Card className="border border-border p-6">
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <SkillTag
                      key={skill}
                      label={skill}
                      variant="primary"
                    />
                  ))}
                </div>
              </Card>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Certificats et reconnaissances
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Certificats RSE"
                  description="Reconnaissances, labels, diplômes"
                  type="document"
                />
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary Section */}
        <section className="mt-16 bg-accent/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Résumé de mon engagement
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">5+</p>
              <p className="text-muted-foreground">Activités bénévoles</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">3</p>
              <p className="text-muted-foreground">Associations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">100+</p>
              <p className="text-muted-foreground">Heures engagées</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">8</p>
              <p className="text-muted-foreground">Compétences développées</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
