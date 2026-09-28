import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Calendar,
  MapPin,
  Award,
  Users,
  Code,
  Target,
} from "lucide-react";
import { id } from "date-fns/locale";

const internships = [
  {
    title: "Full Stack Development & Gen AI Intern",
    company: "Dhee Coding Lab (DCL) — ProDhee Technologies Pvt. Ltd.",
    companyColor: "text-emerald-700 dark:text-emerald-300 font-bold",
    iconBg:
      "bg-emerald-900 text-white dark:bg-emerald-800 dark:text-emerald-100 border border-emerald-700",
    regNo: "CIN: U62013KA2024PTC189726",
    duration: "September 24, 2026 – Ongoing (1 Year Program)",
    location: "Bengaluru, Karnataka (BTM Layout / Yelahanka / Rajajinagar)",
    type: "Incubation Internship Program (IIP)",
    status: "Selected — Offer Issued",
    description:
      "Selected for the Incubation Internship Program (IIP) at Dhee Coding Lab, a unit of ProDhee Technologies Pvt. Ltd., Bengaluru. The program encompasses extensive bootcamp training on Full Stack Development, Generative AI technologies, and DevOps, followed by live onsite/offshore project development with internship and interview preparation with placement assistance. No charges for training and placement.",
    responsibilities: [
      "Extensive Bootcamp training on Python Full Stack Development with Generative AI technologies and DevOps.",
      "Live onsite/offshore model of project development with hands-on internship experience.",
      "Core Python, Python Programming, DSA, Django, SQL, React API, Fast API development.",
      "Frontend engineering with HTML, CSS, JavaScript, and React JS.",
      "Aptitude & Soft Skill development for industry readiness.",
      "Generative AI integration and application development.",
      "Interview preparation with mock interviews and placement assistance.",
    ],
    achievements: [
      "Successfully cleared all interview rounds and selected for the prestigious IIP program.",
      "Issued official Internship Offer Letter (CIN: U62013KA2024PTC189726) by ProDhee Technologies Pvt. Ltd.",
      "Eligible for placement packages ranging from 3 LPA to 36 LPA upon successful completion.",
      "Training covers Full Stack + Gen AI + DevOps — a comprehensive industry-ready tech stack.",
    ],
    technologies: [
      "Python",
      "Django",
      "React JS",
      "SQL",
      "Fast API",
      "Gen AI",
      "DSA",
      "HTML/CSS/JS",
      "DevOps",
    ],
    skills: [
      "Full Stack Development",
      "Generative AI",
      "Python Engineering",
      "DevOps & Deployment",
      "Interview Readiness",
      "Project Development",
    ],
    projects: [],
  },
  {
    title: "Web Developer Trainee",
    company: "Vishal Global Tech (VGT)",
    companyColor: "text-slate-900 dark:text-slate-100 font-bold",
    iconBg:
      "bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 border border-slate-700",
    regNo: "UDYAM-UP-28-0108839",
    duration: "June 01, 2026 – June 30, 2026",
    location: "Greater Noida, UP",
    type: "Web Development Department",
    status: "Official Offer Letter Issued",
    description:
      "Selected as a Web Developer Trainee within the Web Development Department at Vishal Global Tech (UDYAM-UP-28-0108839). Focused on architecting and delivering client web portals and enterprise B2B platforms under professional corporate governance.",
    responsibilities: [
      "Architect web application interfaces and backend services across vishalglobaltech.com, indelhincr.com, and offers.indelhincr.com.",
      "Maintain full-stack web modules, REST API handlers, and SQL data schemas for dynamic client management.",
      "Execute full SDLC workflows adhering to enterprise security standards, code confidentiality, and performance benchmarks.",
      "Participate in daily engineering standups (10 AM – 6 PM) for system monitoring, code reviews, and UI optimization.",
    ],
    achievements: [
      "Issued official internship offer letter (Reg. No. UDYAM-UP-28-0108839) in Greater Noida West.",
      "Architected production web systems serving B2B clients and real user traffic.",
      "Integrated responsive UI components and automated form routing across client portals.",
    ],
    technologies: [
      "JavaScript",
      "HTML5/CSS3",
      "SQL Server",
      "REST APIs",
      "Web Systems",
      "Git",
    ],
    skills: [
      "Full-Stack Web Dev",
      "SDLC",
      "Enterprise Systems",
      "Client Portals",
      "RESTful Architecture",
    ],
    projects: [
      {
        id: 1,
        name: "Vishal Global Tech Corporate Portal",
        description:
          "Official enterprise website and service offerings platform.",
        link: "https://vishalglobaltech.com",
      },
      {
        id: 2,
        name: "Indelhincr B2B Platform",
        description:
          "Live production B2B portal for client registration and web solutions.",
        link: "https://indelhincr.com",
      },
      {
        id: 3,
        name: "Indelhincr Offers Portal",
        description: "Client promotional campaign and deal management system.",
        link: "https://offers.indelhincr.com",
      },
    ],
  },
  {
    title: "Web Development and Designing Intern",
    company: "Vishal Global Tech (VGT)",
    companyColor: "text-slate-900 dark:text-slate-100 font-bold",
    iconBg:
      "bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 border border-slate-700",
    regNo: "UDYAM-UP-28-0108839",
    duration: "20 January 2025 – 06 February 2025",
    location: "Greater Noida, UP",
    type: "Production Web Development",
    status: "Successfully Completed",
    description:
      "Engineered core modules and optimized SQL Server database performance for live web application (https://www.indelhincr.com). Applied comprehensive Software Development Life Cycle (SDLC) practices from initial business requirement gathering to live server deployment.",
    responsibilities: [
      "Planning & Feasibility: Gathered business requirements, evaluated technical feasibility, and mapped project milestones.",
      "Requirements Analysis: Analyzed end-user workflows to architect conversion-oriented B2B interface layouts.",
      "Architecture & Design: Designed software architecture and responsive UI structures utilizing HTML5 and CSS3.",
      "Coding & Web APIs: Developed robust client-side logic in JavaScript and integrated Web APIs for seamless dynamic data flow.",
      "Database Optimization: Managed SQL Server schemas, tuned relational queries, and structured data persistence.",
      "Testing & Deployment: Conducted quality, functionality, performance, and security testing prior to live production deployment.",
      "Maintenance: Actively monitored live application performance and implemented iterative improvements.",
    ],
    achievements: [
      "Delivered and deployed live production application https://www.indelhincr.com with 99.9% cross-device fidelity.",
      "Enhanced user experience through responsive website designing (HTML5 & CSS3) and modular JavaScript development.",
      "Streamlined client inquiry pipelines with automated Web API integrations and SQL Server data capture.",
      "Earned formal certificate of completion (UDYAM-UP-28-0108839) recognizing outstanding domain contribution.",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web API",
      "SQL Server",
      "Responsive Design",
      "Git",
    ],
    skills: [
      "Website Designing",
      "Website Development",
      "Database Engineering",
      "SDLC Execution",
      "Performance & Security Testing",
    ],
    projects: [
      {
        id: 1,
        name: "Indelhincr.com Live Web Application",
        description:
          "Production client application with responsive layout, Web API routing, and SQL Server data integration.",
        link: "https://www.indelhincr.com",
      },
    ],
  },
  {
    title: "Full Stack MERN & ML Intern",
    company: "My Job Grow (in collaboration with Techfest IIT Bombay)",
    companyColor: "text-purple-700 dark:text-purple-300 font-bold",
    iconBg:
      "bg-purple-900 text-white dark:bg-purple-800 dark:text-purple-100 border border-purple-700",
    regNo: "CIN - U85500WB2024PTC267473",
    duration: "October 2024 – November 2024",
    location: "Hybrid / Remote",
    type: "MERN & ML Hybrid Program",
    status: "Completed with Outstanding Honors",
    description:
      "Completed intensive hybrid internship program with My Job Grow (Eduquirk Innovations Pvt. Ltd.) in collaboration with Techfest IIT Bombay. Spearheaded full-stack MERN capstone projects and applied Machine Learning pipelines from data preprocessing to predictive model deployment.",
    responsibilities: [
      "Analytical Problem Solving: Broken down complex problem statements, interpreted structured datasets, and identified actionable architectural insights.",
      "MERN Engineering: Built modular full-stack applications with React, Node.js, Express, and MongoDB.",
      "ML Fundamentals & Data Processing: Conducted data cleaning, feature preprocessing, and exploratory data analysis.",
      "Model Building & Evaluation: Trained and evaluated machine learning models using Python and Scikit-Learn for predictive tasks.",
      "End-to-End Delivery: Combined web and AI components to deliver complete full-lifecycle software solutions.",
      "Project Management: Managed sprint deadlines, organized deliverables from planning to execution, and led peer reviews.",
    ],
    achievements: [
      "Awarded 'Outstanding Achievement' honors for high analytical rigor and software development velocity.",
      "Engineered Track My Expenses full-stack web application with real-time balance calculations and visual analytics.",
      "Developed and deployed real-time Chatbox application with responsive messaging architecture.",
      "Demonstrated technical excellence across both full-stack software development and predictive ML pipelines.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Scikit-Learn",
      "Redux",
      "Tailwind CSS",
      "Netlify",
    ],
    skills: [
      "MERN Architecture",
      "Machine Learning",
      "Data Processing",
      "Model Evaluation",
      "Analytical Problem Solving",
      "Project Management",
    ],
    projects: [
      {
        id: 1,
        name: "Track My Expenses",
        description:
          "Full-stack personal finance application with real-time balance calculations, category filters, and data visualization.",
        link: "https://trackmyexpensess.netlify.app/",
      },
      {
        id: 2,
        name: "Chatbox UI",
        description:
          "Real-time chat platform with message persistence, user presence, and responsive UI layout.",
        link: "https://chatbox-frontend.netlify.app/",
      },
    ],
  },
];

export function InternshipDetails() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3">
            Work Experience &amp; Internships
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Hands-on software engineering experience delivering full-stack
            solutions and optimizing database systems in real production
            environments.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {internships.map((internship) => (
            <Card
              key={internship.title}
              className="border border-border/60 hover:border-border transition-colors bg-card shadow-sm"
            >
              <CardHeader className="pb-4 border-b border-border/30">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl shadow-sm ${internship.iconBg || "bg-muted text-foreground"}`}
                      >
                        <Building className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-xl sm:text-2xl text-foreground">
                          {internship.title}
                        </CardTitle>
                        <p
                          className={`font-bold text-sm sm:text-base ${internship.companyColor || "text-foreground"}`}
                        >
                          {internship.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-1">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="font-mono text-xs font-normal"
                    >
                      {internship.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="font-mono text-xs font-normal border-border/60 text-foreground"
                    >
                      {internship.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {internship.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center space-x-2 text-sm sm:text-base">
                        <Code className="h-4 w-4 text-primary" />
                        <span>Key Responsibilities</span>
                      </h4>
                      <div className="space-y-2">
                        {internship.responsibilities.map(
                          (responsibility, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 text-xs sm:text-sm"
                            >
                              <span className="text-muted-foreground font-mono mt-0.5">
                                •
                              </span>
                              <span className="text-muted-foreground leading-relaxed">
                                {responsibility}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center space-x-2 text-sm sm:text-base">
                        <Award className="h-4 w-4 text-primary" />
                        <span>Key Achievements</span>
                      </h4>
                      <div className="space-y-2">
                        {internship.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2 text-xs sm:text-sm"
                          >
                            <span className="text-muted-foreground font-mono mt-0.5">
                              •
                            </span>
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center space-x-2 text-sm sm:text-base">
                        <Target className="h-4 w-4 text-primary" />
                        <span>Technologies &amp; Tools</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {internship.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs font-mono py-0.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center space-x-2 text-sm sm:text-base">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Core Competencies</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {internship.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs font-mono py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {internship.projects &&
                        internship.projects.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-border/30">
                            <h5 className="font-medium text-foreground text-xs uppercase tracking-wider mb-2">
                              Deployed Production Links:
                            </h5>
                            <div className="space-y-2">
                              {internship.projects.map((proj, pidx) => (
                                <div key={pidx} className="text-xs">
                                  {proj.link ? (
                                    <a
                                      href={proj.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                                    >
                                      {proj.name} →
                                    </a>
                                  ) : (
                                    <span className="font-medium text-foreground">
                                      {proj.name}
                                    </span>
                                  )}
                                  <p className="text-muted-foreground text-[11px] mt-0.5">
                                    {proj.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
