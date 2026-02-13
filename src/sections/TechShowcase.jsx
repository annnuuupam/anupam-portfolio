import { TechAnimation } from "@/components/TechAnimation";

export const TechShowcase = () => {
  return (
    <section id="skills" className="py-36 relative overflow-hidden">
      {/* Soft Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] 
      bg-primary/10 rounded-full blur-[140px]
      -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE — ANIMATION */}
          <div className="relative flex justify-center ">
            {/* Glow Behind */}
            <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full " />

            <div
              className="
               relative
               w-full
               max-w-xl
               p-8
               rounded-3xl
               glass
               glow-border
              "
            >
              <TechAnimation />
            </div>
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="space-y-8">
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">
              Core Expertise
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Architecting{" "}
              <span className="text-primary">Scalable Systems</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              I design and build high-performance backend systems and modern web
              applications focused on scalability, security, and clean
              engineering principles. My work combines strong computer science
              fundamentals with practical production-ready implementation.
            </p>

            {/* PREMIUM SKILLS */}
            <div className="space-y-8 pt-4">
              {/* Backend */}
              <div>
                <h4 className="text-primary font-semibold mb-3 tracking-wide">
                  Backend Engineering
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Java",
                    "Spring Boot",
                    "Hibernate",
                    "JDBC",
                    "Spring Security",
                    "REST APIs",
                    "MySQL",
                    "SQL",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="
            px-4 py-2
            rounded-full
            bg-white/[0.04]
            border border-white/10
            text-sm
            hover:border-primary/40
            hover:bg-primary/10
            transition-all duration-300
          "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h4 className="text-primary font-semibold mb-3 tracking-wide">
                  Frontend Development
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Redux",
                    "JavaScript",
                    "TypeScript",
                    "HTML",
                    "CSS",
                    "Tailwind CSS",
                    "Bootstrap",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="
            px-4 py-2
            rounded-full
            bg-white/[0.04]
            border border-white/10
            text-sm
            hover:border-primary/40
            hover:bg-primary/10
            transition-all duration-300
          "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps */}
              <div>
                <h4 className="text-primary font-semibold mb-3 tracking-wide">
                  DevOps & Tools
                </h4>

                <div className="flex flex-wrap gap-3">
                  {["Docker", "Git", "GitHub", "GitHub Actions"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="
            px-4 py-2
            rounded-full
            bg-white/[0.04]
            border border-white/10
            text-sm
            hover:border-primary/40
            hover:bg-primary/10
            transition-all duration-300
          "
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Fundamentals */}
              <div>
                <h4 className="text-primary font-semibold mb-3 tracking-wide">
                  Computer Science Fundamentals
                </h4>

                <div className="flex flex-wrap gap-3">
                  {["Data Structures", "Object-Oriented Programming (OOP)"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="
            px-4 py-2
            rounded-full
            bg-white/[0.04]
            border border-white/10
            text-sm
            hover:border-primary/40
            hover:bg-primary/10
            transition-all duration-300
          "
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
