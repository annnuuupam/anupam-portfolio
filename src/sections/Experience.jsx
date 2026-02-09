const experiences = [
  {
    period: "Jun 2025 — Present",
    role: "Software Development Intern – Java Full Stack",
    company: "KodNest Technologies, Bengaluru",
    description:
      "Developing full-stack applications using Java, Spring Boot, Hibernate, JDBC, and MySQL. Engineered a Point of Sale (POS) Management System with secure authentication, structured business logic, and efficient database integration. Designing RESTful APIs and improving application performance through debugging, testing, and optimization while following industry-standard coding practices.",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JDBC",
      "MySQL",
      "REST APIs",
      "Spring Security",
    ],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Software Engineer (Project Experience)",
    company: "Enterprise Full Stack Applications",
    description:
      "Designed and built enterprise-grade systems including a multi-tenant SaaS POS platform supporting real-time inventory, analytics, role-based access, loyalty programs, refunds, and multi-branch management. Also engineered 'Sales Savvy', a fully containerized e-commerce platform with secure payment integrations (Razorpay, Stripe, PayPal), modular backend services, and scalable REST APIs using Spring Boot.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Redux",
      "MySQL",
      "Docker",
      "Spring Security",
      "REST APIs",
      "Payment Integration",
    ],
    current: false,
  },
  {
    period: "Oct 2024 — Apr 2025",
    role: "AI Trainer – Coding (Freelance)",
    company: "Outlier (Remote)",
    description:
      "Selected after technical evaluation to train advanced AI models by reviewing, writing, and improving code-based responses. Evaluated AI-generated outputs for accuracy, efficiency, and logical correctness while applying strong knowledge of Java, Python, and data structures.",
    technologies: ["Java", "Python", "Data Structures", "AI", "Code Review"],
    current: false,
  },
  {
    period: "Oct 2023 — Dec 2023",
    role: "Machine Learning Intern",
    company: "Varcons Technologies, Bengaluru",
    description:
      "Contributed to a Lip-to-Speech Synthesis project using Machine Learning and Python. Designed UI templates, integrated ML outputs with Flask and JavaScript, and processed audio datasets using Pandas and NumPy to enhance model performance.",
    technologies: ["Python", "Machine Learning", "Flask", "Pandas", "NumPy"],
    current: false,
  },
  {
    period: "2023 — Present",
    role: "Full Stack Developer",
    company: "Academic & Personal Engineering Projects",
    description:
      "Developed production-style applications spanning machine learning, computer vision, and web platforms including a Face Recognition Attendance System, AI Lung Cancer Detection solution, DBMS practice portal, and Event Management Dashboard.",
    technologies: [
      "Django",
      "Python",
      "OpenCV",
      "Machine Learning",
      "JavaScript",
      "SQL",
    ],
    current: false,
  },
  {
    period: "2021 — 2025",
    role: "Bachelor of Engineering (Computer Science)",
    company: "Visvesvaraya Technological University",
    description:
      "Graduated with strong foundations in data structures, object-oriented programming, DBMS, algorithms, and software engineering while actively building real-world, problem-solving projects.",
    technologies: ["Data Structures", "DBMS", "OOP", "Algorithms"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            My journey as a{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              software engineer.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
             A timeline showcasing my internships, enterprise projects,
            freelance work, and hands-on experience building scalable,
            production-ready software solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};