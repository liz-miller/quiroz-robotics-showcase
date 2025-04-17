
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Robotics Engineer with expertise in full-stack automation, mobile robots, and industrial systems
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          I build and integrate robotics systems that move, think, and perform — from concept to real-world deployment.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          I'm Paul Quiroz, a Robotics Engineer completing my Spring 2025 Residency with Learn Robotics. I specialize in cross-functional robotics projects that span software development, electronics, CAD design, and autonomous systems. With hands-on experience across simulations and hardware, I focus on solving real-world challenges through smart engineering, rapid prototyping, and scalable system design.
        </p>
      </div>
      <div className="mt-16 animate-bounce">
        <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
      </div>
    </section>
  );
};
