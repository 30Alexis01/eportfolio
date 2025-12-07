import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderBox from "@/components/PlaceholderBox";
import SkillTag from "@/components/SkillTag";
import { Trophy, Clock, Users, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Sports() {
  const competitions = [
    {
      id: 1,
      name: "Compétition 1",
      date: "2024",
      result: "Résultat",
      level: "Régional",
    },
    {
      id: 2,
      name: "Compétition 2",
      date: "2024",
      result: "Résultat",
      level: "National",
    },
    {
      id: 3,
      name: "Compétition 3",
      date: "2023",
      result: "Résultat",
      level: "Régional",
    },
  ];

  const softSkills = [
    "Discipline",
    "Persévérance",
    "Gestion du stress",
    "Esprit compétitif",
    "Rigueur",
    "Confiance en soi",
    "Dépassement de soi",
    "Équilibre vie-sport",
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Activités extrascolaires"
          title="Sport & Autres Activités"
          description="Mes accomplissements sportifs et activités complémentaires"
        />

        <Tabs defaultValue="swimming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="swimming" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Sport</span>
            </TabsTrigger>
            <TabsTrigger value="softskills" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Soft skills</span>
            </TabsTrigger>
          </TabsList>

          {/* Swimming Tab */}
          <TabsContent value="swimming" className="space-y-6">
            {/* Two Sports Columns */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Natation */}
              <Card className="border border-border p-8 bg-accent/5">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Parcours en natation
                </h4>
                <p className="text-muted-foreground mb-4">
                  Depuis [année], je pratique la natation compétitive au niveau
                  [niveau]. Mes spécialités sont les épreuves de [distances/styles].
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">
                      Club :
                    </span>{" "}
                    <span className="text-muted-foreground">[Nom du club]</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">
                      Fréquence :
                    </span>{" "}
                    <span className="text-muted-foreground">
                      [X] entraînements par semaine
                    </span>
                  </p>
                </div>
              </Card>

              {/* Course à pied */}
              <Card className="border border-border p-8 bg-accent/5">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Parcours en course à pied
                </h4>
                <p className="text-muted-foreground mb-4">
                  Depuis [année], je pratique la course à pied au niveau
                  [niveau]. Mes spécialités sont les distances de [5km/10km/semi-marathon/marathon].
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">
                      Club :
                    </span>{" "}
                    <span className="text-muted-foreground">[Nom du club]</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">
                      Fréquence :
                    </span>{" "}
                    <span className="text-muted-foreground">
                      [X] entraînements par semaine
                    </span>
                  </p>
                </div>
              </Card>
            </div>






          </TabsContent>



          {/* Soft Skills Tab */}
          <TabsContent value="softskills" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Soft skills développées par le sport
            </h3>

            {/* Skills Grid */}
            <Card className="border border-border p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0"
                  >
                    <div className="p-2 rounded bg-accent/10 flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{skill}</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Compétence développée à travers la pratique sportive
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Réalisations personnelles
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-border p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">5+</p>
                  <p className="text-foreground font-semibold">Années de pratique</p>
                </Card>
                <Card className="border border-border p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">50+</p>
                  <p className="text-foreground font-semibold">Compétitions</p>
                </Card>
                <Card className="border border-border p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">10</p>
                  <p className="text-foreground font-semibold">Podiums</p>
                </Card>
              </div>
            </div>

            {/* Additional Activities */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Autres activités
              </h4>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Activités complémentaires"
                  description="Musique, arts, loisirs, bénévolat sportif..."
                  type="generic"
                />
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
