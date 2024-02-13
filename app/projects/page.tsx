/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import ProjectItem from '@/components/ProjectItem';
import { PROJECTS } from 'data';

export default function () {
  return (
    <div className="mb-5">
      <h3 className="mb-6 text-xl font-black tracking-tight text-gray-700 dark:text-gray-400 md:text-3xl">
        Projects
      </h3>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
