import React from "react";
import { Reveal, Section } from "./ui";

const links = [
  { label: "GitHub", href: "https://github.com/Amrutha-NV", symbol: "</>", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amrutha-n-v-3701102a1", symbol: "in", external: true },
  { label: "Email me", href: "mailto:amruthavasudeva28@gmail.com", symbol: "@", external: true },
];

export default function Connect() {
  return (
    <Section id="connect" tint="bg-black/70">
      <Reveal>
        <div className="glass mx-auto max-w-4xl rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-base font-semibold text-white/70">Before you go...</p>

          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's stay
            <br />
            connected<span className="text-yellow-200">.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/80">
            Have an interesting idea, want to talk tech, or just want to say
            hello? My inbox is open!
          </p>
          <br></br>
          <p>Mail To:amruthavasudeva28@gmail.com</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-stone-900"
              >
                <span aria-hidden="true" className="font-mono text-sm opacity-80">{link.symbol}</span>
                {link.label}
                <span aria-hidden="true" className="transition duration-300 group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-2 border-t border-white/15 pt-8">
            <p className="text-sm font-semibold text-white/80">
              Made with curiosity, coffee, and a little bit of chaos.
            </p>
            <p className="text-sm text-white/55">© {new Date().getFullYear()} Amrutha N V</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}