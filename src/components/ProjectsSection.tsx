
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "TurtleBot Design Platform – Generative Robotic Art",
      summary: "Designed a programmable robot platform that autonomously creates generative art for commercial clients using a block-based simulation. Built 10 unique designs with increasing complexity and optimized execution speed for profitability.",
      techStack: "Blockly, JavaScript, movement algorithm design, simulation optimization",
    },
    {
      title: "Healthy Plant Monitor – Smart Ag Sensor System",
      summary: "Developed a real-time electronic monitoring device to track hydration and light levels in crops using simulated sensors. Provided farmers with instant, on-site feedback to improve plant health and maximize yield — all without needing cloud connectivity.",
      techStack: "Arduino (C/C++), potentiometer, LDR sensor, real-time logic, LED feedback system",
    },
    {
      title: "Space Rescue Rover – Autonomous Beacon Navigation",
      summary: "Built an autonomous rover that navigates a Mars-style terrain to locate and rescue a beacon-emitting \"Martian\" within 90 seconds. Used custom sensor arrays and LED feedback for real-time decision-making in a boundary-constrained environment.",
      techStack: "Arduino (C/C++), IR + LDR sensors, motor control, LED state indicators, battery-powered mobility",
    },
    {
      title: "Pick & Place Robot Arm – Reverse-Engineered 3D Model",
      summary: "Reverse-engineered and recreated a 6-joint industrial robotic arm from scratch using Fusion 360. Delivered manufacturing-ready CAD assemblies, exploded-view drawings, and validated gripper integration for downstream automation use.",
      techStack: "Fusion 360, Robotiq 3-Finger Gripper, STEP/STL/PDF exports, tolerance design, motion constraints",
    },
    {
      title: "Manufacturing Automation – PLC Systems Integration",
      summary: "Programmed and tested ladder logic routines to automate industrial machines across four simulated customer use cases. Mapped digital/analog I/O, implemented E-stop safety features, and ran full virtual commissioning using a PLC simulator.",
      techStack: "PLCLogix, Ladder Logic (IEC 61131-3), Virtual Worlds simulator, I/O documentation, real-time control logic",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
