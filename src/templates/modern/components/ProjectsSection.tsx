// src/templates/modern/components/ProjectsSection.tsx
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';
import { useRef } from 'react';
import { useProjectsStore } from '@/stores/projects';
import { scrollToElement } from '@/helpers/utils';
import TechTag from '@/helpers/common/components/TechTag'; // ✅ import

const ProjectsSection = () => {
  const ref = useRef(null);
  const projects = useProjectsStore((s) => s.projects);

  useProjectsStore.subscribe(() => {
    scrollToElement(ref);
  });

  if (!projects.length) return null;

  return (
    <div ref={ref} className="mb-4">
      <SectionHeading title="Projects" />
      {projects.map((proj, idx) => (
        <div key={proj.id} className="mb-4">
          <SectionTitle
            label={`${proj.title} (${proj.startDate} - ${
              proj.isOngoing ? 'Present' : proj.endDate
            })`}
          />
          {proj.url && (
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 underline mb-1 inline-block"
            >
              {proj.url}
            </a>
          )}
          <SectionSubtitle label="Tech Stack" />
          <div className="mb-2 flex flex-wrap gap-1">
            {proj.techStack.split(',').map((tech) => (
              <TechTag key={tech.trim()} tech={tech.trim()} />
            ))}
          </div>

          <p className="text-xs text-gray-700 mb-1">{proj.description}</p>

          {proj.highlights?.length > 0 && (
            <ul className="list-disc list-inside text-xs text-gray-600">
              {proj.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
