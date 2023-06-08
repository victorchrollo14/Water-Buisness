import React from "react";
import "./index.css";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Products from "./components/Products";

function App() {
  return (
    <div className="app min-h-screen relative ">
      <Header />
      <Hero />
      <About />
      <Products />
    </div>
  );
}

export default App;
