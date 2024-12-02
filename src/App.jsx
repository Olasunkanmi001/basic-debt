import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import projects from "./data/Projects";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
