import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
  title: "NexCart – Full Stack E-Commerce Platform",
  description:
    "Built a full stack e-commerce platform featuring secure authentication, dynamic product catalog, real-time cart management, and admin product CRUD. Implemented REST APIs with Spring Boot, integrated React for a responsive UI, and delivered a scalable architecture for production-style deployment.",
  image: "/projects/NexCart.png",
  tags: [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "REST APIs",
    "Authentication",
    "Cart System",
    "Admin Dashboard",
  ],
  link: "https://nex-cart-alpha.vercel.app/",
  github: "https://github.com/annnuuupam/NexCart",
},

  {
    title: "AI Lung Cancer Detection System",
    description:
      "Developed a machine learning healthcare solution that analyzes chest X-rays to detect lung cancer using a Random Forest algorithm. Integrated a chatbot to guide patients with preventive measures.",
    image: "/projects/lung-cancer.png",
    tags: ["Python", "Machine Learning", "Django", "Random Forest"],
    link: "#",
    github: "https://github.com/annnuuupam/Lungs-Cancer-Detection",
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
    image: "/projects/catch-insect.png",
    tags: ["JavaScript", "HTML", "CSS", "Game Development", "DOM Manipulation"],
    link: "https://annnuuupam.github.io/Catch-The-Insect/",
    github: "https://github.com/annnuuupam/Catch-The-Insect",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 relative overflow-hidden">
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

        {/* Grid Layout: 4 Cards Horizontally on One Line */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-screen-2xl w-full mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden flex flex-col animate-fade-in hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-white/5 hover:border-primary/40"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-90"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-[2px]">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all shadow-lg"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-card/50 to-transparent">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                   <ArrowUpRight
                    className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 5).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] text-[10px] font-semibold tracking-wider uppercase border border-white/10 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.03] text-[10px] font-semibold tracking-wider border border-white/10 text-muted-foreground">
                      +{project.tags.length - 5}
                    </span>
                  )}
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