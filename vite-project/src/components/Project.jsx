import React from "react";
import { Reveal } from "./ui";

export default function Project({ title, about, technologies, gitlink, livelink, index = 0 }) {
  return (
    <Reveal delay={index * 150} className="h-full">
      <article className="glass glass-hover flex h-full flex-col rounded-3xl p-8 sm:p-10">
        <h3 className="font-display text-3xl font-extrabold sm:text-4xl">{title}</h3>

        <p className="mt-5 max-w-prose flex-1 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
          {about}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech} className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-stone-900">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-8">
          <a
            href={livelink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-900 transition duration-300 hover:-translate-y-1 hover:bg-yellow-100"
          >
            Live demo ↗
          </a>
          <a
            href={gitlink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-stone-900"
          >
            View code ↗
          </a>
        </div>
      </article>
    </Reveal>
  );
}