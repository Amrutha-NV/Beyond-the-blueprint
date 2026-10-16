import React from "react";
import { Reveal, Section, SectionHeading } from "./ui";

import girl from "../assets/girl.jfif";
import cat from "../assets/cat2.jfif";
import sunflower from "../assets/Vintage Sunflower Stickers for Creative Projects _ Download Free Designs Today.jfif";
import dog from "../assets/dog.jfif"
import lotus from "../assets/lotus.jfif"
const facts = ["Bangalore", "Fourth-year engineering", "Full-stack web", "Exploring cloud"];

export default function About() {
  return (
    <Section id="about" tint="bg-black/60">
      <SectionHeading eyebrow="A little introduction" title={<>About me <span className="inline-block rotate-6">:)</span></>} />

      <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-10">
            <div className="max-w-prose space-y-6 text-lg leading-8 sm:text-xl sm:leading-9">
              <p>
                Hello! I'm Amrutha, a tech savvy based in Bangalore,
                currently in my fourth year of engineering.
              </p>
              <p className="text-white/85">
                I build projects mainly around full-stack web development and
                I'm currently exploring the world of cloud.
              </p>
              <p className="text-white/85">
                Apart from being a tech nerd, I love reading books and watching
                movies. A movie freak, to be honest :&gt;&gt;
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {facts.map((f) => (
                <li key={f} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3.5 font-bold text-stone-900 transition duration-300 hover:-translate-y-1 hover:bg-yellow-100"
            >
              See my projects ↗
            </a>
            <a
              href="#future"
              className="glass rounded-full px-7 py-3.5 font-bold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-stone-900"
            >
              My writing ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[500px]">
            <div className="glass relative z-10 rotate-3 rounded-3xl p-3 transition duration-500 hover:rotate-0">
              <div className="h-72 w-56 overflow-hidden rounded-2xl sm:h-96 sm:w-72">
                <img src={girl} alt="Amrutha" className="h-full w-full object-cover" />
              </div>
              <span className="absolute -bottom-5 -left-5 -rotate-6 rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-stone-900 shadow-lg">
                that's me!
              </span>
            </div>
            {/* Sunflower - Top Right */}
<img src={sunflower} alt="" aria-hidden="true" className="float absolute right-0 top-2 z-20 h-24 w-24 rotate-12 object-contain drop-shadow-lg sm:-right-4 sm:h-32 sm:w-32" /> 

{/* Cat - Bottom Left */}
<img src={cat} alt="" aria-hidden="true" className="float absolute bottom-4 left-0 z-20 h-24 w-24 -rotate-12 rounded-xl object-contain drop-shadow-lg sm:-left-6 sm:h-32 sm:w-32" style={{ animationDelay: "1.5s" }} /> 

{/* Dog - Bottom Right */}
<img src={dog} alt="" aria-hidden="true" className="float absolute bottom-4 right-0 z-20 h-24 w-24 rotate-12 rounded-xl object-contain drop-shadow-lg sm:-right-6 sm:h-32 sm:w-32" style={{ animationDelay: "1.6s" }} /> 






            <div className="absolute left-2 top-6 z-20 -rotate-6 rounded-xl bg-yellow-200 px-4 py-3 text-sm font-bold leading-6 text-stone-800 shadow-lg sm:-left-4">
              books + coffee
              <br />+ movies = me
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}