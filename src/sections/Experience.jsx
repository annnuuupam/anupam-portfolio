import { motion } from "framer-motion";

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
    <section id="experience" className="py-12 md:py-16 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            My journey as a{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              software engineer.
            </span>
          </h2>
          <p className="text-muted-foreground">
             A timeline showcasing my internships, enterprise projects,
            freelance work, and hands-on experience building scalable,
            production-ready software solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Glow Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <motion.span
                      animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
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
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-colors cursor-default`}
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
                        <motion.span
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + (techIdx * 0.05) }}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};