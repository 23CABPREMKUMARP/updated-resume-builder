import React, { useState } from 'react';
import { useProjectsStore } from '@/stores/projects';
import Project from './component/Project';
import AddProject from './component/AddProject';
import MoveEditSection from '@/helpers/common/components/MoveEditSectionContainer';

const ProjectLayout = () => {
  const projects = useProjectsStore((s) => s.projects);
  const remove = useProjectsStore((s) => s.remove);
  const onMoveUp = useProjectsStore((s) => s.onmoveup);
  const onMoveDown = useProjectsStore((s) => s.onmovedown);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (name: string, isExpanded: boolean) => {
    setExpandedIndex(isExpanded ? parseInt(name) : null);
  };

  return (
    <div className="flex flex-col gap-8 mb-8">
      {projects.map((proj, index) => (
     <MoveEditSection
  key={proj.id}
  title={proj.title || 'Project'}
  expanded={expandedIndex === index}
  clickHandler={() => setExpandedIndex(expandedIndex === index ? null : index)} // replaces handleChange + name
  length={projects.length}
  index={index}
  onDelete={() => remove(index)}
  onMoveUp={() => onMoveUp(index)}
  onMoveDown={() => onMoveDown(index)}
>
  <Project projectInfo={proj} currentIndex={index} />
</MoveEditSection>

      ))}

<AddProject
  handleChange={handleExpand}
  isEmpty={projects.length === 0}
/>


    </div>
  );
};

export default ProjectLayout;
