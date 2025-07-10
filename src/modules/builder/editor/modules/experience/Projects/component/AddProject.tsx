// src/modules/builder/editor/modules/projects/components/AddProject.tsx
import { useMemo } from 'react';
import { OutlinedButton } from '@/helpers/common/atoms/Buttons';
import { useProjectsStore } from '@/stores/projects';
import { IProjectItem } from '@/stores/projects.interface';

const NEW_PROJECT: IProjectItem = {
  id: '',
  title: '',
  techStack: '',
  url: '',
  startDate: null,
  endDate: null,
  isOngoing: false,
  description: '',
  highlights: [],
};

const AddProject = ({
  handleChange,
  isEmpty,
}: {
  handleChange: (name: string, isExpanded: boolean) => void;
  isEmpty: boolean;
}) => {
  const add = useProjectsStore((s) => s.add);

  const createNew = () => {
    const newId = `${Math.random()}`;
    NEW_PROJECT.id = newId;
    add({ ...NEW_PROJECT });
    handleChange(newId, true);
  };

  const caption = useMemo(() => (isEmpty ? '+ Add a project' : '+ Add more'), [isEmpty]);

  return (
    <div className="flex gap-2 mt-3">
      <OutlinedButton onClick={createNew}>{caption}</OutlinedButton>
    </div>
  );
};

export default AddProject;
