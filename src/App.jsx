import React from "react";
import "./index.css";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Products from "./components/Products";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="app min-h-screen relative ">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
