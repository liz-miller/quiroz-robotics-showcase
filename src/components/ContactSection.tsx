
import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">Let's Connect</h2>
        <div className="flex justify-center space-x-8">
          <a href="mailto:your.email@example.com" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <Mail className="w-5 h-5 mr-2" />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin className="w-5 h-5 mr-2" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <Github className="w-5 h-5 mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
