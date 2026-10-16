import React from "react";
import { Reveal, Section, SectionHeading } from "./ui";

import sunflower from "../assets/Vintage Sunflower Stickers for Creative Projects _ Download Free Designs Today.jfif";
import cat from "../assets/cat2.jfif";

const aspirations = [
  { title: "Keep learning", note: "Stay curious,Be delusional,have a limitless mindset, explore unfamiliar things, and never stop asking why." },
  { title: "Build meaningful things", note: "Turn random ideas into projects that make someone's life a little better." },
  { title: "Create a life I love", note: "Make room for adventures,Be greatful to what you already have, creativity, the little things, and everything beyond work." },
];

export default function Future() {
  return (
    <Section id="future" tint="bg-black/60">
      <SectionHeading center eyebrow="A note to my future self" title={<>Still becoming<span className="text-yellow-200">.</span></>}>
        I don't have everything figured out, and maybe I'm not supposed to.
        For now, here's what I'm choosing to work towards.
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {aspirations.map((item, i) => (
          <Reveal key={item.title} delay={i * 120} className="h-full">
            <article className="glass glass-hover h-full rounded-2xl p-8">
              <h3 className="font-display mb-4 text-2xl font-extrabold">{item.title}</h3>
              <p className="leading-7 text-white/80">{item.note}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Letter */}
      <Reveal className="mt-28 lg:mt-36">
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/60 bg-white/90 p-10 text-center text-stone-900 shadow-2xl backdrop-blur-xl sm:p-14">
          <img src={sunflower} alt="" aria-hidden="true" className="float absolute -right-4 -top-10 h-20 w-20 rotate-12 object-contain sm:-right-8 sm:-top-14 sm:h-28 sm:w-28" />
          <p className="mb-6 text-base font-semibold text-stone-500">Dear Present me,</p>
          <p className="font-display text-2xl font-extrabold leading-relaxed sm:text-3xl">
            Actions Compound,Hardwork matters,Even an imperfect step is Better,Do Not give up.
          </p>
          <p className="mt-8 text-base font-medium text-stone-500">
            So its, one day and one little adventure at a time.
          </p>
        </div>
      </Reveal>

      {/* Writing */}
      <Reveal className="mt-28 text-center lg:mt-36">
        <p className="mb-4 text-base font-semibold text-white/70">Sometimes I write things down</p>
        <h3 className="font-display text-3xl font-extrabold sm:text-4xl">Notes from my mind.</h3>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
          Thoughts, lessons, things I'm learning, and random ideas that deserve
          a little more than a place in my head.
        </p>
        <a
          href="https://medium.com/@amruthavasudeva28"
          target="_blank"
          rel="noreferrer"
          className="glass mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-stone-900"
        >
          Read my writing <span aria-hidden="true">↗</span>
        </a>
      </Reveal>

      {/* Cat */}
      <Reveal className="mt-24 flex flex-col items-center">
        <img src={cat} alt="" aria-hidden="true" className="h-28 w-28 -rotate-6 object-contain drop-shadow-xl transition duration-500 hover:rotate-6 hover:scale-110 sm:h-36 sm:w-36" />
        <p className="mt-4 text-base font-semibold italic text-white/70">
          Just figuring it all out, one day at a time.
        </p>
      </Reveal>
    </Section>
  );
}