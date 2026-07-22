import React from "react";
import { ExternalLink, Award, Flame, CheckCircle2 } from "lucide-react";
import { LeetCodeIcon, GeeksforGeeksIcon } from "@/components/Icons";

export const CodingProfiles = () => {
  return (
    <section id="coding" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Problem Solving & Consistency
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 animate-fade-in animation-delay-100">
            Coding <span className="text-primary">Profiles & Achievements</span>
          </h2>

          <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
            Consistently practicing Data Structures, Algorithms, and Core Computer Science concepts across competitive programming platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* LEETCODE CARD */}
          <div className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between">
            {/* Soft background highlight */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            
            <div>
              {/* Header & Link */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <LeetCodeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">LeetCode Profile</h3>
                    <p className="text-xs text-muted-foreground">@annnuuupam</p>
                  </div>
                </div>
                <a
                  href="https://leetcode.com/u/annnuuupam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                  aria-label="View LeetCode Profile"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* 50 Days Badge 2026 Achievement Highlight Card */}
              <div className="relative glass bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-primary/10 rounded-2xl p-6 border border-primary/30 overflow-hidden my-6">
                <div className="absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5 animate-pulse" />
                  <span>2026 Badge Earned</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Visual LeetCode 50 Days Hex Badge representation matching screenshot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-28 relative flex items-center justify-center">
                      {/* Hexagon Outer Frame */}
                      <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-[0_0_12px_rgba(32,178,166,0.4)]">
                        <polygon
                          points="50,3 97,30 97,85 50,112 3,85 3,30"
                          fill="#18181b"
                          stroke="#3f3f46"
                          strokeWidth="6"
                        />
                        <polygon
                          points="50,8 92,33 92,82 50,107 8,82 8,33"
                          fill="#09090b"
                          stroke="#52525b"
                          strokeWidth="2"
                        />
                      </svg>
                      {/* Badge Text & Lime/Primary Green Ball */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <span className="text-white font-extrabold text-lg tracking-tighter -ml-3">50</span>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 absolute left-3 bottom-7">DAYS</span>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lime-500 to-emerald-400 border-2 border-emerald-300 shadow-[0_0_15px_rgba(132,204,22,0.8)] absolute right-2.5 top-7 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-zinc-950" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badge Text Details */}
                  <div className="text-center sm:text-left space-y-1">
                    <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                      LeetCode Milestone
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      50 Days Badge 2026
                    </h4>
                    <p className="text-sm text-zinc-300 font-medium">
                      Solving problems 50+ days in 2026
                    </p>
                    <p className="text-xs text-muted-foreground pt-1">
                      Awarded for consistent problem solving and continuous streak in coding algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link Button */}
            <a
              href="https://leetcode.com/u/annnuuupam/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/40 text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 text-primary"
            >
              <span>Explore LeetCode Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>


          {/* GEEKSFORGEEKS CARD */}
          <div className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between">
            {/* Soft background highlight */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            
            <div>
              {/* Header & Link */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <GeeksforGeeksIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">GeeksforGeeks Profile</h3>
                    <p className="text-xs text-muted-foreground">@annnuuupam</p>
                  </div>
                </div>
                <a
                  href="https://www.geeksforgeeks.org/profile/annnuuupam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                  aria-label="View GeeksforGeeks Profile"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* GFG Highlights Box */}
              <div className="relative glass bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-primary/10 rounded-2xl p-6 border border-white/5 space-y-4 my-6">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>DSA & Core CS Practice</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Regularly solving Data Structures & Algorithms challenges, mastering core computer science concepts, and maintaining algorithmic problem-solving speed.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="glass p-3 rounded-xl border border-white/5 text-center">
                    <div className="text-lg font-bold text-primary">DSA</div>
                    <div className="text-[11px] text-muted-foreground">Topic Mastery</div>
                  </div>
                  <div className="glass p-3 rounded-xl border border-white/5 text-center">
                    <div className="text-lg font-bold text-primary">Active</div>
                    <div className="text-[11px] text-muted-foreground">Problem Solving</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link Button */}
            <a
              href="https://www.geeksforgeeks.org/profile/annnuuupam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/40 text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 text-primary"
            >
              <span>Explore GeeksforGeeks Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
