import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    quote:
      "Anupam consistently demonstrated strong analytical thinking and dedication throughout his academic journey. His ability to understand complex engineering concepts and translate them into practical solutions sets him apart.",
    author: "Dr. Krishna A. N",
    role: "Professor & Head of Department",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "A highly disciplined learner, Anupam approaches challenges with curiosity and persistence. His technical growth and commitment to continuous learning make him well-prepared for the software industry.",
    author: "Dr. Naveena C",
    role: "Professor",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "During his training, Anupam showed excellent problem-solving skills and quickly grasped Java and backend development concepts. His work ethic and consistency indicate strong potential as a software engineer.",
    author: "Punith Kumar",
    role: "Java & SQL Mentor — KodNest",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "Anupam built responsive and user-friendly interfaces while maintaining clean code practices. His attention to detail and willingness to improve make him stand out among trainees.",
    author: "Gamana",
    role: "Front-End Technologies Mentor",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "With a strong foundation in data structures and logical reasoning, Anupam approaches software development with clarity and structure. He is capable of adapting quickly to real-world engineering environments.",
    author: "Ayush B",
    role: "Data Structures & Algorithms Mentor",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto Slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setPaused(true);
      next();
    },
    onSwipedRight: () => {
      setPaused(true);
      previous();
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Voices From My{" "}
            <span className="italic font-serif text-primary">
              Learning Journey.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          {...handlers}
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-10 bg-primary p-4 rounded-full shadow-lg">
              <Quote className="text-white w-6 h-6" />
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl leading-relaxed font-medium mb-10 transition-all duration-500">
              "{testimonials[activeIdx].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIdx].avatar}
                alt={testimonials[activeIdx].author}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
              />

              <div>
                <div className="font-semibold text-lg">
                  {testimonials[activeIdx].author}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonials[activeIdx].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={previous}
              className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === activeIdx
                      ? "w-10 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
