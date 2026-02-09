import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "SalesSavvy – Enterprise Full Stack E-Commerce Platform",
    description:
      "Engineered a production-style full stack e-commerce platform supporting authentication, product catalog, cart, order management, and secure payment processing. Designed scalable backend services using Spring Boot and REST APIs, integrated React + Redux for dynamic UI, and containerized the application with Docker for efficient deployment.",
    image: "/projects/SalesSavvy.jpeg", // save screenshot
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Redux",
      "MySQL",
      "Docker",
      "REST APIs",
      "Payment Integration",
    ],
    link: "#", // add live link if deployed
    github: "#", // add repo
  },
  {
    title: "AI Lung Cancer Detection System",
    description:
      "Developed a machine learning healthcare solution that analyzes chest X-rays to detect lung cancer using a Random Forest algorithm. Integrated a chatbot to guide patients with preventive measures.",
    image: "/projects/lung-cancer.png",
    tags: ["Python", "Machine Learning", "Django", "Random Forest"],
    link: "#",
    github: "#",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Built an automated attendance system using OpenCV and KNN that detects faces in real time and logs records instantly — eliminating manual tracking.",
    image: "/projects/face-recognition.png",
    tags: ["Python", "OpenCV", "Computer Vision", "KNN"],
    link: "#",
    github: "https://github.com/annnuuupam/Face-Attendance",
  },
  {
    title: "Catch The Insect – Interactive Browser Game",
    description:
      "Developed an interactive browser-based game using JavaScript where players catch moving insects against the clock. Implemented dynamic DOM manipulation, event-driven gameplay, score tracking, and increasing difficulty levels to enhance user engagement.",
    image: "/projects/catch-insect.png", // add screenshot to public/projects
    tags: ["JavaScript", "HTML", "CSS", "Game Development", "DOM Manipulation"],
    link: "https://annnuuupam.github.io/Catch-The-Insect/",
    github: "https://github.com/annnuuupam/Catch-The-Insect",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
         <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
                {" "}
              define my skills.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of real-world applications showcasing my expertise in
            full-stack development, machine learning, and scalable system
            design.
          </p>
        </div>

        {/* Grid */}
         <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="https://github.com/annnuuupam">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};