import React from "react";
import "./index.css";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="app min-h-screen ">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
