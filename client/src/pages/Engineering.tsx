import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderBox from "@/components/PlaceholderBox";
import SkillTag from "@/components/SkillTag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Beaker, Code } from "lucide-react";

export default function Engineering() {
  const enseeProjects = [
    {
      id: 1,
      title: "Projet 1",
      semester: "S7",
      description: "Description du projet académique",
      skills: ["Python", "Machine Learning"],
    },
    {
      id: 2,
      title: "Projet 2",
      semester: "S7",
      description: "Description du projet académique",
      skills: ["Java", "Architecture logicielle"],
    },
    {
      id: 3,
      title: "Projet 3",
      semester: "S8",
      description: "Description du projet académique",
      skills: ["OCaml", "Programmation fonctionnelle"],
    },
  ];

  const biobiotechProjects = [
    {
      id: 1,
      title: "Projet Biotech 1",
      description: "Projet de biotechnologie",
      skills: ["Culture cellulaire", "Chromatographie"],
    },
    {
      id: 2,
      title: "Projet Biotech 2",
      description: "Projet de bioinformatique",
      skills: ["Bioinformatique", "Modélisation"],
    },
  ];

  const technicalSkills = {
    programming: ["Python", "Java", "OCaml", "C++", "JavaScript"],
    biotech: [
      "Western Blot",
      "Immunofluorescence",
      "Culture cellulaire",
      "Chromatographie",
      "Spectrométrie",
    ],
    tools: ["Git", "Docker", "Jupyter", "Bioinformatics tools"],
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Parcours académique"
          title="Parcours Ingénieur"
          description="Découvrez mes projets académiques, mes compétences techniques et mes réalisations"
        />

        {/* Tabs for different sections */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Projets</span>
            </TabsTrigger>
            <TabsTrigger value="biotech" className="flex items-center gap-2">
              <Beaker className="w-4 h-4" />
              <span className="hidden sm:inline">Biotech</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Compétences</span>
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Projets académiques ENSEEIHT
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {enseeProjects.map((project) => (
                <Card
                  key={project.id}
                  className="border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h4>
                        <p className="text-sm text-accent font-medium">
                          {project.semester}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">
                          Compétences :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill) => (
                            <SkillTag
                              key={skill}
                              label={skill}
                              variant="secondary"
                            />
                          ))}
                        </div>
                      </div>
                      <PlaceholderBox
                        title="Documents du projet"
                        description="Rapport, code source, présentations"
                        type="document"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Biotech Tab */}
          <TabsContent value="biotech" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Projets ENSTBB (Biotechnologies)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {biobiotechProjects.map((project) => (
                <Card
                  key={project.id}
                  className="border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">
                          Techniques & compétences :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill) => (
                            <SkillTag
                              key={skill}
                              label={skill}
                              variant="secondary"
                            />
                          ))}
                        </div>
                      </div>
                      <PlaceholderBox
                        title="Résultats & documents"
                        description="Protocoles, résultats, analyses"
                        type="document"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Compétences Techniques
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Programming */}
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-semibold text-accent mb-4">
                    Programmation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.programming.map((skill) => (
                      <SkillTag key={skill} label={skill} variant="primary" />
                    ))}
                  </div>
                </Card>

                {/* Biotech */}
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-semibold text-accent mb-4">
                    Biotechnologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.biotech.map((skill) => (
                      <SkillTag key={skill} label={skill} variant="primary" />
                    ))}
                  </div>
                </Card>

                {/* Tools */}
                <Card className="border border-border p-6">
                  <h4 className="text-lg font-semibold text-accent mb-4">
                    Outils & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.tools.map((skill) => (
                      <SkillTag key={skill} label={skill} variant="primary" />
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Compétences Transversales
              </h3>
              <Card className="border border-border p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <SkillTag label="Leadership" variant="secondary" />
                  <SkillTag label="Gestion de projet" variant="secondary" />
                  <SkillTag label="Communication" variant="secondary" />
                  <SkillTag label="Travail en équipe" variant="secondary" />
                  <SkillTag label="Résolution de problèmes" variant="secondary" />
                  <SkillTag label="Adaptabilité" variant="secondary" />
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Resources */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Card className="border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Documentation complète
            </h3>
            <PlaceholderBox
              title="Tous les documents de projets"
              description="Rapports, présentations, codes source"
              type="document"
            />
          </Card>

          <Card className="border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Galerie de projets
            </h3>
            <PlaceholderBox
              title="Photos et résultats"
              description="Images de laboratoire, résultats d'expériences"
              type="image"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
