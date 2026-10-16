import React from "react";
import { Reveal, Typewriter } from "./ui";

import girl from "../assets/me.jpg";
import books from "../assets/books.jfif";
import camera from "../assets/camera.jfif";
import cat from "../assets/cat.jfif";
import cinema from "../assets/cinema.jfif";
import coffee from "../assets/Steaming hot coffee icon.jfif";
import lotus from "../assets/lotus.jfif";

const phrases = [
  "Engineer by passion,",
  "Full-stack builder,",
  "Cloud explorer,",
  "Movie freak,",
];

const interests = [
  { src: books, alt: "Books", pos: "top-4 left-2", rotate: "-12deg", delay: "0s" },
  { src: camera, alt: "Photography", pos: "top-6 right-2", rotate: "10deg", delay: "0.8s" },
  { src: coffee, alt: "Coffee", pos: "top-1/2 -left-2", rotate: "-10deg", delay: "1.6s" },
  { src: lotus, alt: "Sunflowers", pos: "top-1/2 -right-2", rotate: "12deg", delay: "2.4s" },
  { src: cat, alt: "Cats", pos: "bottom-20 left-2", rotate: "8deg", delay: "3.2s" },
  { src: cinema, alt: "Cinema", pos: "bottom-8 right-4", rotate: "-8deg", delay: "4s" },
];

export default function Header() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-black/40 via-black/50 to-black/60 px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2 lg:gap-24">
        {/* Introduction */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <Reveal>
            <span className="glass inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-semibold text-white/90">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-200" />
              Welcome to my little world
            </span>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-display mt-8 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hello! I'm
              <br />
              Amrutha N V<span className="text-yellow-200">.</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 space-y-1 text-xl font-bold sm:text-2xl lg:text-3xl">
              <p className="min-h-[1.5em]">
                <Typewriter phrases={phrases} />
              </p>
              <p className="text-white/80">everything else by curiosity!!!.</p>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <p className="mx-auto mt-8 max-w-md text-lg leading-8 text-white/80 md:mx-0">
              A curious mind, a creative soul, and a person figuring things out
              one little adventure at a time.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <a
              href="#about"
              className="glass mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 font-bold transition duration-300 hover:bg-white hover:text-stone-900"
            >
              Know more about me
              <span aria-hidden="true" className="nudge">↓</span>
            </a>
          </Reveal>
        </div>

        {/* Portrait + scrapbook collage */}
        <Reveal delay={200} className="order-1 flex justify-center md:order-2">
          <div className="relative flex h-[420px] w-full max-w-[460px] items-center justify-center sm:h-[500px]">
            {interests.map((item) => (
              <div
                key={item.alt}
                className={`float absolute z-20 ${item.pos}`}
                style={{ animationDelay: item.delay }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ rotate: item.rotate }}
                  className="h-14 w-14 rounded-2xl border border-white/60 object-cover shadow-xl transition duration-500 hover:scale-125 sm:h-20 sm:w-20"
                />
              </div>
            ))}

            {/* Glass frame around the portrait */}
            <div className="glass relative z-10 -rotate-3 rounded-3xl p-3 transition duration-500 hover:rotate-0">
              <div className="relative h-64 w-52 overflow-hidden rounded-2xl sm:h-80 sm:w-64">
                <img
                  src={girl}
                  alt="A little illustration representing Amrutha"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rotate-6 rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-stone-900 shadow-lg">
                just being me :)
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="absolute bottom-6 left-0 right-0 px-6 text-center text-sm text-white/60">
        A little more about the person behind the engineer
      </p>
    </section>
  );
}