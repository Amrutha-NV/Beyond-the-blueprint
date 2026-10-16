import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Build from "./components/Build";
import Future from "./components/Future";
import Connect from "./components/Connect";

import redPaper from "./assets/red paper.jfif";

export default function App() {
  return (
    <main
      className="min-h-screen overflow-x-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url("${redPaper}")` }}
    >
      <Header />
      <About />
      <Build />
      <Future />
      <Connect />
    </main>
  );
}