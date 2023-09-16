import React from "react";
import "./index.css";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Products from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app min-h-screen relative ">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
