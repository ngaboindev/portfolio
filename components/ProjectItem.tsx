import { FaLink } from 'react-icons/fa';
export default function ProjectItem({ project }) {
  return (
    <div className="border text-gray-700 dark:text-gray-400 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 dark:shadow-gray-900 shadow-sm hover:shadow transition-all cursor-pointer rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="text-xl uppercase">{project.name}</h3>
        <div>
          <a href={project.url} target="__blank" className="text-sm">
            <FaLink />
          </a>
        </div>
      </div>
      <div>
        <ul className="flex items-center py-3 gap-2 font-mono text-xs text-gray-400 dark:text-gray-300 flex-wrap">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
