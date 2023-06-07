import React from "react";
import "./index.css";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

function App() {
  return (
    <div className="app min-h-screen relative ">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
