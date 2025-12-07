import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderBox from "@/components/PlaceholderBox";
import SkillTag from "@/components/SkillTag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Target,
  Users,
  BookOpen,
  Link as LinkIcon,
  FileText,
} from "lucide-react";

export default function Career() {
  const requiredSkills = [
    { skill: "Leadership", level: "Avancé", status: "acquired" },
    { skill: "Gestion de projet", level: "Intermédiaire", status: "acquired" },
    { skill: "Communication", level: "Avancé", status: "acquired" },
    { skill: "Analyse de données", level: "Avancé", status: "developing" },
    { skill: "Stratégie commerciale", level: "Intermédiaire", status: "developing" },
    { skill: "Innovation", level: "Avancé", status: "developing" },
  ];

  const internships = [
    {
      id: 1,
      title: "Stage 1",
      company: "Entreprise",
      duration: "3 mois",
      period: "2023",
      missions: ["Mission 1", "Mission 2", "Mission 3"],
    },
    {
      id: 2,
      title: "Stage 2",
      company: "Entreprise",
      duration: "6 mois",
      period: "2024",
      missions: ["Mission 1", "Mission 2", "Mission 3"],
    },
  ];

  const actionPlan = [
    {
      year: "2025",
      quarter: "Q1",
      actions: ["Action 1", "Action 2", "Action 3"],
    },
    {
      year: "2025",
      quarter: "Q2",
      actions: ["Action 1", "Action 2", "Action 3"],
    },
    {
      year: "2025",
      quarter: "Q3",
      actions: ["Action 1", "Action 2"],
    },
    {
      year: "2026",
      quarter: "Q1",
      actions: ["Action 1", "Action 2"],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Projet professionnel"
          title="Développement de Carrière (PPP)"
          description="Mon projet professionnel personnalisé et ma stratégie de carrière"
        />

        <Tabs defaultValue="ppp" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="ppp" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">PPP</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Compétences</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Expérience</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Ressources</span>
            </TabsTrigger>
          </TabsList>

          {/* PPP Career Project Tab */}
          <TabsContent value="ppp" className="space-y-8">
            {/* Design Thinking Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Design Thinking & Réflexion
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Processus Design Thinking"
                  description="Empathie, Définition, Idéation, Prototypage, Test"
                  icon={<Target className="w-12 h-12 text-accent" />}
                />
              </Card>
            </div>

            {/* Professional Objective */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Objectif professionnel
              </h3>
              <Card className="border border-border p-8 bg-accent/5">
                <PlaceholderBox
                  title="Mon objectif de carrière"
                  description="Décrivez votre vision professionnelle à court et long terme"
                  type="generic"
                />
              </Card>
            </div>

            {/* Sector Analysis */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Analyse du secteur visé
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Secteur d'activité
                  </h4>
                  <PlaceholderBox
                    title="Secteur ciblé"
                    description="Industrie, domaine, marché"
                    type="generic"
                  />
                </Card>
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Tendances du marché
                  </h4>
                  <PlaceholderBox
                    title="Analyse de marché"
                    description="Opportunités, défis, évolutions"
                    type="document"
                  />
                </Card>
              </div>
            </div>

            {/* Professional Interviews */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Interviews professionnels
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Interviews de professionnels"
                  description="Rencontres avec des experts du secteur"
                  icon={<Users className="w-12 h-12 text-accent" />}
                />
              </Card>
            </div>

            {/* Job Market */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Marché du travail
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Analyse du marché de l'emploi"
                  description="Offres d'emploi, salaires, localisation, tendances"
                  type="document"
                />
              </Card>
            </div>

            {/* Inspirations & Mentors */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Inspirations et mentors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Modèles professionnels
                  </h4>
                  <PlaceholderBox
                    title="Professionnels inspirants"
                    description="Parcours, réalisations, conseils"
                    type="generic"
                  />
                </Card>
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Mentoring
                  </h4>
                  <PlaceholderBox
                    title="Mentors et conseillers"
                    description="Personnes qui vous guident"
                    type="generic"
                  />
                </Card>
              </div>
            </div>

            {/* Mind Map */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Mind Map du projet
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Mind Map du PPP"
                  description="Visualisation du projet professionnel"
                  type="image"
                />
              </Card>
            </div>

            {/* Action Plan */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Plan d'action 2025-2026
              </h3>
              <div className="space-y-4">
                {actionPlan.map((period, index) => (
                  <Card
                    key={index}
                    className="border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                        <Target className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground">
                          {period.year} - {period.quarter}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {period.actions.map((action, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-2 h-2 rounded-full bg-accent"></span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Compétences requises vs acquises
            </h3>

            {/* Skills Comparison */}
            <div className="space-y-4">
              {requiredSkills.map((item, index) => (
                <Card key={index} className="border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {item.skill}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Niveau requis : {item.level}
                      </p>
                    </div>
                    <SkillTag
                      label={
                        item.status === "acquired"
                          ? "Acquise"
                          : "En développement"
                      }
                      variant={item.status === "acquired" ? "primary" : "secondary"}
                    />
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        item.status === "acquired"
                          ? "bg-accent w-full"
                          : "bg-accent w-2/3"
                      }`}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Development Plan */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Plan de développement des compétences
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Formation et développement"
                  description="Cours, certifications, projets pour développer les compétences manquantes"
                  type="document"
                />
              </Card>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-8">
            {/* Internships */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Stages et expériences professionnelles
              </h3>
              <div className="space-y-6">
                {internships.map((internship) => (
                  <Card
                    key={internship.id}
                    className="border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground">
                          {internship.title}
                        </h4>
                        <p className="text-accent font-semibold">
                          {internship.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {internship.period} • {internship.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="font-semibold text-foreground mb-2">
                        Missions :
                      </p>
                      <ul className="space-y-1">
                        {internship.missions.map((mission, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <PlaceholderBox
                      title="Documents du stage"
                      description="Rapport, attestation, certificats"
                      type="document"
                    />
                  </Card>
                ))}
              </div>
            </div>

            {/* CV Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Curriculum Vitae
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border p-8">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    CV Français
                  </h4>
                  <PlaceholderBox
                    title="CV FR"
                    description="Télécharger ou consulter"
                    type="document"
                  />
                </Card>
                <Card className="border border-border p-8">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    CV English
                  </h4>
                  <PlaceholderBox
                    title="CV EN"
                    description="Download or view"
                    type="document"
                  />
                </Card>
              </div>
            </div>

            {/* Cover Letters */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Lettres de motivation
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Lettres de motivation"
                  description="Modèles et exemples"
                  type="document"
                />
              </Card>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            {/* PPP Presentation */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Présentation PPP (6-8 slides)
              </h3>
              <Card className="border border-border p-8">
                <PlaceholderBox
                  title="Slides PPP"
                  description="PDF, images des slides, versions FR/EN"
                  type="document"
                />
              </Card>
            </div>

            {/* Online Presence */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Réseaux & Présence en ligne
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <LinkIcon className="w-6 h-6 text-accent" />
                    <h4 className="text-lg font-bold text-foreground">LinkedIn</h4>
                  </div>
                  <PlaceholderBox
                    title="Profil LinkedIn"
                    description="Lien vers votre profil"
                    type="generic"
                  />
                </Card>

                <Card className="border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <LinkIcon className="w-6 h-6 text-accent" />
                    <h4 className="text-lg font-bold text-foreground">GitHub</h4>
                  </div>
                  <PlaceholderBox
                    title="Profil GitHub"
                    description="Lien vers vos projets"
                    type="generic"
                  />
                </Card>


              </div>
            </div>


          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
