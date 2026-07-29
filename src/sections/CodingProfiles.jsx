import React from "react";
import { ExternalLink, Award, Flame, Star } from "lucide-react";
import { LeetCodeIcon, GeeksforGeeksIcon, HackerRankIcon } from "@/components/Icons";

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
            Problem Solving &amp; Consistency
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 animate-fade-in animation-delay-100">
            Coding <span className="text-primary">Profiles &amp; Achievements</span>
          </h2>

          <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
            Consistently practicing Data Structures, Algorithms, and Core Computer Science concepts across competitive programming platforms.
          </p>
        </div>

        {/* Profiles Grid — 3 equal columns on lg */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* ── LEETCODE CARD ── */}
          <div className="glass rounded-3xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-500 relative group overflow-hidden flex flex-col">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

            {/* Card Header */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <LeetCodeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold">LeetCode</h3>
                  <p className="text-xs text-muted-foreground">@annnuuupam</p>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/annnuuupam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                aria-label="View LeetCode Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Achievement Badge Box */}
            <div className="flex-1 relative glass bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-primary/10 rounded-2xl p-5 border border-primary/30 overflow-hidden mb-5 flex flex-col items-center justify-center gap-4 text-center">
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] font-semibold">
                <Flame className="w-3 h-3 animate-pulse" />
                <span>2026 Badge</span>
              </div>

              {/* Hexagonal Badge — fully self-contained SVG */}
              <div className="mt-2 drop-shadow-[0_0_14px_rgba(32,178,166,0.4)]">
                <svg viewBox="0 0 100 115" width="88" height="104" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="greenGrad" cx="40%" cy="40%">
                      <stop offset="0%" stopColor="#a3e635" />
                      <stop offset="100%" stopColor="#10b981" />
                    </radialGradient>
                  </defs>
                  {/* Outer hex */}
                  <polygon points="50,3 97,30 97,85 50,112 3,85 3,30" fill="#18181b" stroke="#3f3f46" strokeWidth="5" />
                  {/* Inner hex */}
                  <polygon points="50,8 92,33 92,82 50,107 8,82 8,33" fill="#09090b" stroke="#52525b" strokeWidth="2" />
                  {/* "50" number */}
                  <text x="50" y="55" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="28" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="-1">50</text>
                  {/* "DAYS" label */}
                  <text x="50" y="73" textAnchor="middle" dominantBaseline="middle" fill="#a1a1aa" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="3">DAYS</text>
                  {/* Green check circle */}
                  <circle cx="79" cy="36" r="13" fill="url(#greenGrad)" stroke="#86efac" strokeWidth="1.5" />
                  {/* Checkmark */}
                  <path d="M73.5 36.5 L77.5 40.5 L85 33" stroke="#052e16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-primary block">LeetCode Milestone</span>
                <h4 className="text-lg font-bold text-white">50 Days Badge 2026</h4>
                <p className="text-sm text-zinc-300">Solving problems 50+ days in 2026</p>
                <p className="text-xs text-muted-foreground pt-0.5">Consistent streak in coding algorithms.</p>
              </div>
            </div>

            {/* Bottom Link */}
            <a
              href="https://leetcode.com/u/annnuuupam/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/40 text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 text-primary"
            >
              <span>Explore LeetCode</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>


          {/* ── GEEKSFORGEEKS CARD ── */}
          <div className="glass rounded-3xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-500 relative group overflow-hidden flex flex-col">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

            {/* Card Header */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <GeeksforGeeksIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold">GeeksforGeeks</h3>
                  <p className="text-xs text-muted-foreground">@annnuuupam</p>
                </div>
              </div>
              <a
                href="https://www.geeksforgeeks.org/profile/annnuuupam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                aria-label="View GeeksforGeeks Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Achievement Badge Box */}
            <div className="flex-1 relative glass bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-primary/10 rounded-2xl p-5 border border-primary/30 overflow-hidden mb-5 flex flex-col items-center justify-center gap-4 text-center">
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] font-semibold">
                <Award className="w-3 h-3" />
                <span>Active</span>
              </div>

              {/* Circular Icon Badge */}
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mt-2 drop-shadow-[0_0_12px_rgba(32,178,166,0.3)]">
                <GeeksforGeeksIcon className="w-9 h-9 text-primary" />
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-primary block">DSA Practice</span>
                <h4 className="text-lg font-bold text-white">Core CS Mastery</h4>
                <p className="text-sm text-zinc-300">Data Structures &amp; Algorithms</p>
                <p className="text-xs text-muted-foreground pt-0.5">Algorithmic problem-solving speed.</p>
              </div>

              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="glass p-2.5 rounded-xl border border-white/5 text-center">
                  <div className="text-base font-bold text-primary">DSA</div>
                  <div className="text-[10px] text-muted-foreground">Topic Mastery</div>
                </div>
                <div className="glass p-2.5 rounded-xl border border-white/5 text-center">
                  <div className="text-base font-bold text-primary">Active</div>
                  <div className="text-[10px] text-muted-foreground">Problem Solving</div>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <a
              href="https://www.geeksforgeeks.org/profile/annnuuupam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/40 text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 text-primary"
            >
              <span>Explore GeeksforGeeks</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>


          {/* ── HACKERRANK CARD ── */}
          <div className="glass rounded-3xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-500 relative group overflow-hidden flex flex-col">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

            {/* Card Header */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <HackerRankIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold">HackerRank</h3>
                  <p className="text-xs text-muted-foreground">@annnuuupam</p>
                </div>
              </div>
              <a
                href="https://www.hackerrank.com/profile/annnuuupam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                aria-label="View HackerRank Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Achievement Badge Box */}
            <div className="flex-1 relative glass bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-primary/10 rounded-2xl p-5 border border-primary/30 overflow-hidden mb-5 flex flex-col items-center justify-center gap-4 text-center">
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] font-semibold">
                <Star className="w-3 h-3" />
                <span>Gold Level</span>
              </div>

              {/* Hexagonal Java Badge */}
              <div className="w-20 h-24 relative flex items-center justify-center mt-2">
                <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-[0_0_14px_rgba(32,178,166,0.45)]">
                  <polygon points="50,3 97,30 97,85 50,112 3,85 3,30" fill="#0f1f1e" stroke="#20b2a6" strokeWidth="4" />
                  <polygon points="50,10 90,33 90,82 50,105 10,82 10,33" fill="#0a1715" stroke="#20b2a6" strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.772-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.981.623-10.522-.568 2.082-1.006 3.774-.892 3.774-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.541 1.644-2.469 6.197-3.665 5.19-7.625M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639" />
                  </svg>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-primary block">HackerRank Achievement</span>
                <h4 className="text-lg font-bold text-white">Java &mdash; 5 Star Gold</h4>
                <p className="text-sm text-zinc-300">258 points earned</p>
                <p className="text-xs text-muted-foreground pt-0.5">Gold Level for mastering Java challenges.</p>
              </div>
            </div>

            {/* Bottom Link */}
            <a
              href="https://www.hackerrank.com/profile/annnuuupam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/40 text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 text-primary"
            >
              <span>Explore HackerRank</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
