import React from "react";
import Project from "./Project";
import { Reveal, Section, SectionHeading } from "./ui";

const projects = [
  {
    title: "VideoNexus",
    about:
      "A real-time video conferencing platform with peer-to-peer communication, screen sharing, messaging, and an AI meeting intelligence pipeline for summaries and action items.",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "FastAPI", "LangChain"],
    gitlink: "https://github.com/Amrutha-NV/Video-Nexus",
    livelink: "https://video-nexus-j9vz.vercel.app/",
  },
  {
    title: "Forever",
    about:
      "An AI-powered MERN e-commerce platform with product and cart workflows, JWT authentication, Razorpay payment verification, and an AI analytics dashboard.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Razorpay", "LLM APIs"],
    gitlink: "https://github.com/Amrutha-NV/Forever",
    livelink: "https://forever-ycvu.vercel.app/",
  },
];

const techStack = [
  { category: "Languages", skills: ["Java", "JavaScript"] },
  { category: "Frontend", skills: ["React", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "FastAPI"] },
  { category: "AI & Systems", skills: ["LangChain", "LLM APIs"] },
  { category: "Database & Tools", skills: ["MongoDB", "Git", "GitHub", "VS Code"] },
  { category: "Core Concepts", skills: ["Operating Systems", "DBMS", "Computer Networks", "DSA"] },
];

const focus = [
  "Strengthening data structures and algorithms",
  "Learning backend systems and system design",
  "Exploring Dev+ops",
];

export default function Build() {
  return (
    <Section id="projects" tint="bg-black/50">
      <SectionHeading eyebrow="My little corner of creation" title={<>Things I've built<span className="text-yellow-200">.</span></>}>
        Ideas that started as curiosity and slowly turned into code,
        experiments, and projects. Here's a peek at what I've been working on.
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {projects.map((p, i) => (
          <Project key={p.title} index={i} {...p} />
        ))}
      </div>

      {/* Tech stack */}
      <div className="mt-28 lg:mt-36">
        <SectionHeading eyebrow="My toolbox" title="Things I work with.">
          A growing collection of tools and technologies I use to bring ideas
          to life. Still learning, still adding to the list.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 90} className="h-full">
              <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
                <h3 className="mb-5 text-xl font-extrabold">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-stone-900">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Current focus */}
      <Reveal className="mt-28 lg:mt-36">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <p className="mb-3 text-base font-semibold text-white/70">Life lately</p>
          <h2 className="font-display mb-8 text-3xl font-extrabold sm:text-4xl">Currently exploring...</h2>

          <ul className="space-y-5 text-lg font-medium text-white/90">
            {focus.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span aria-hidden="true" className="mt-0.5 text-yellow-200">↗</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-base italic text-white/70">
            This is a work in progress. So am I.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}