import { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";

const certificates = [
  {
    title: "Software Engineer Certification",
    issuer: "HackerRank",
    year: "2025",
    badge: "Verified",
    image: "/certificates/hackerrank.jpg",
    link: "/certificates/hackerrank.pdf",
  },
  {
    title: "Cloud Computing & Distributed Systems",
    issuer: "NPTEL (IIT)",
    year: "2025",
    badge: "Elite",
    image: "/certificates/cloud.jpg",
    link: "/certificates/cloud.pdf",
  },
  {
    title: "Web Development & React with Python",
    issuer: "VTU – Centre for Online Education",
    year: "2025",
    badge: "University",
    image: "/certificates/vtu-react.jpg",
    link: "/certificates/vtu-react.pdf",
  },
  {
    title: "Java Programming Certification",
    issuer: "Udemy",
    year: "2023",
    badge: "Programming",
    image: "/certificates/java.jpg",
    link: "/certificates/java.pdf",
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    year: "2025",
    badge: "Database",
    image: "/certificates/sql.jpg",
    link: "/certificates/sql.pdf",
  },
  {
    title: "HTML CSS JavaScript Certification",
    issuer: "Udemy",
    year: "2023",
    badge: "Frontend",
    image: "/certificates/web.jpg",
    link: "/certificates/web.pdf",
  },
];

export const Certificates = () => {
  const [preview, setPreview] = useState(null);

  return (
    <section id="certificates" className="py-12 md:py-16 relative overflow-hidden">

      {/* Soft Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] 
        bg-primary/10 rounded-full blur-3xl 
        -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>

          <p className="text-muted-foreground mt-4">
            Industry certifications and academic achievements that strengthen my
            expertise in software engineering, cloud computing, and full-stack
            development.
          </p>

        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl border border-white/10 overflow-hidden
              hover:border-primary/40 hover:-translate-y-2
              transition-all duration-300 group relative"
            >

              {/* Badge */}
              <div
                className="absolute top-3 left-3
                bg-primary/90 text-white text-[10px]
                px-3 py-1 rounded-full
                tracking-wider uppercase"
              >
                {cert.badge}
              </div>

              {/* Image */}
              <div
                className="cursor-pointer overflow-hidden"
                onClick={() => setPreview(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-52 object-cover
                  group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">

                <div className="flex items-center gap-2 text-primary text-xs font-medium">
                  <Award size={16} />
                  <span className="uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">
                  {cert.title}
                </h3>

                <div className="flex justify-between items-center text-sm text-muted-foreground">

                  <span>{cert.year}</span>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    View
                    <ExternalLink size={15} />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center
          backdrop-blur-sm z-50"
        >
          <button
            onClick={() => setPreview(null)}
            className="absolute top-6 right-6 text-white hover:text-primary"
          >
            <X size={32} />
          </button>

          <img
            src={preview}
            alt="Certificate Preview"
            className="max-h-[90vh] max-w-[90vw]
            rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}

    </section>
  );
};