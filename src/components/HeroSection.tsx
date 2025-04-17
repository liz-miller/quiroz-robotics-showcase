
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="space-y-6">
        <h1 className="font-space text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
          Paul Quiroz
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-200 leading-relaxed font-space">
          Robotics Engineer with expertise in full-stack automation, mobile robots, and industrial systems
        </h2>
        <h3 className="text-lg md:text-xl text-blue-300 leading-relaxed">
          I build and integrate robotics systems that move, think, and perform — from concept to real-world deployment.
        </h3>
        <p className="text-lg text-blue-400 leading-relaxed max-w-3xl">
          I'm a Robotics Engineer completing my Spring 2025 Residency with Learn Robotics. I specialize in cross-functional robotics projects that span software development, electronics, CAD design, and autonomous systems. With hands-on experience across simulations and hardware, I focus on solving real-world challenges through smart engineering, rapid prototyping, and scalable system design.
        </p>
      </div>
      <div className="mt-16 animate-bounce">
        <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
      </div>
    </section>
  );
};
