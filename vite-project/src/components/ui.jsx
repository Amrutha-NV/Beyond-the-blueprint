import React, { useEffect, useRef, useState } from "react";

/* Fades content in once when it scrolls into view. */
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--delay": `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* Types, pauses, deletes, then moves to the next phrase. */
export function Typewriter({ phrases, speed = 70, deleteSpeed = 35, pause = 1800 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduced.current) {
      setText(phrases[0]);
      return;
    }
    const full = phrases[index];
    let t;
    if (!deleting && text === full) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      t = setTimeout(
        () => setText(full.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, speed, deleteSpeed, pause]);

  return (
    <span aria-label={phrases[0]}>
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

/* Shared section heading so every section has the same rhythm. */
export function SectionHeading({ eyebrow, title, children, center = false }) {
  return (
    <Reveal className={`mb-14 lg:mb-20 ${center ? "text-center" : ""}`}>
      <p className="mb-4 text-base font-semibold text-white/70">{eyebrow}</p>
      <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children && (
        <p
          className={`mt-6 max-w-2xl text-lg leading-8 text-white/80 ${
            center ? "mx-auto" : ""
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/* Consistent section wrapper: same padding + container everywhere. */
export function Section({ id, tint = "bg-black/50", children }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36 ${tint}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}