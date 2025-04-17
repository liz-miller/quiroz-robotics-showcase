
interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string;
  videoUrl?: string;
}

export const ProjectCard = ({ title, summary, techStack, videoUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
      <div className="aspect-video bg-gray-100 rounded-lg mb-6">
        {/* Vimeo placeholder - will be updated later */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Video Demo Coming Soon
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{summary}</p>
      <div className="border-t pt-4">
        <p className="text-sm font-medium text-gray-700">Tech Stack / Tools:</p>
        <p className="text-sm text-gray-600 mt-1">{techStack}</p>
      </div>
    </div>
  );
};
