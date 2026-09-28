import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStacks = [
  {
    category: "Frontend",
    description: "Modern UI/UX development with responsive design",
    technologies: [
      { name: "React.js", level: "Advanced", color: "bg-cyan-400" },
      { name: "JavaScript", level: "Advanced", color: "bg-amber-400" },
      { name: "TypeScript", level: "Advanced", color: "bg-blue-500" },
      { name: "HTML5/CSS3", level: "Expert", color: "bg-orange-500" },
      { name: "Tailwind CSS", level: "Advanced", color: "bg-sky-400" },
      { name: "Next.js", level: "Intermediate", color: "bg-slate-300" },
      { name: "Redux", level: "Intermediate", color: "bg-purple-500" },
    ],
  },
  {
    category: "Backend",
    description: "Server-side development, API design, and data-driven systems",
    technologies: [
      { name: "Node.js", level: "Advanced", color: "bg-indigo-500" },
      { name: "Python", level: "Intermediate", color: "bg-amber-500" },
      { name: "Data Science", level: "Intermediate", color: "bg-violet-500" },
      { name: "Express.js", level: "Advanced", color: "bg-slate-400" },
      { name: "MongoDB", level: "Intermediate", color: "bg-fuchsia-500" },
      { name: "RESTful APIs", level: "Advanced", color: "bg-blue-600" },
      {
        name: "JWT Authentication",
        level: "Intermediate",
        color: "bg-rose-500",
      },
      {
        name: "Database Design",
        level: "Intermediate",
        color: "bg-indigo-600",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Development tools and deployment platforms",
    technologies: [
      { name: "Git/GitHub", level: "Advanced", color: "bg-rose-600" },
      { name: "VS Code", level: "Expert", color: "bg-blue-500" },
      { name: "Netlify", level: "Advanced", color: "bg-cyan-500" },
      { name: "Vercel", level: "Advanced", color: "bg-slate-200" },
      { name: "Figma", level: "Intermediate", color: "bg-pink-500" },
      { name: "Postman", level: "Intermediate", color: "bg-orange-600" },
      { name: "Star UML", level: "Advanced", color: "bg-indigo-600" },
    ],
  },
  {
    category: "Cloud & Services",
    description: "Cloud platforms and third-party integrations",
    technologies: [
      { name: "AWS", level: "Intermediate", color: "bg-amber-500" },
      { name: "Microsoft Azure", level: "Intermediate", color: "bg-blue-600" },
      { name: "Firebase", level: "Intermediate", color: "bg-orange-400" },
      { name: "API Integration", level: "Advanced", color: "bg-violet-600" },
      {
        name: "Third-party Services",
        level: "Intermediate",
        color: "bg-indigo-400",
      },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30 font-semibold";
    case "Advanced":
      return "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold";
    case "Intermediate":
      return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-medium";
    case "Beginner":
      return "bg-slate-500/15 text-slate-600 dark:text-slate-400 border border-slate-500/30 font-normal";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function TechStack() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life, from
            concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techStacks.map((stack, index) => (
            <Card
              key={stack.category}
              className="border-border hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  {stack.category}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {stack.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                        <span className="font-medium text-foreground">
                          {tech.name}
                        </span>
                      </div>
                      <Badge
                        className={getLevelColor(tech.level)}
                        variant="secondary"
                      >
                        {tech.level}
                      </Badge>
                    </div>
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
