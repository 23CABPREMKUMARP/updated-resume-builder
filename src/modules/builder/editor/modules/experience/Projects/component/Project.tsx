import { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useProjectsStore } from '@/stores/projects';
import { IProjectItem } from '@/stores/projects.interface';
import { SwitchWidget } from '@/helpers/common/atoms/Switch';

interface IProps {
  projectInfo: IProjectItem;
  currentIndex: number;
}

const Project: React.FC<IProps> = ({ projectInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    (name: string, value: string | boolean | null) => {
      const updated = { ...projectInfo };

      switch (name) {
        case 'title':
          updated.title = value as string;
          break;
        case 'techStack':
          updated.techStack = value as string;
          break;
        case 'link':
          updated.url = value as string;
          break;
        case 'summary':
          updated.description = value as string;
          break;
        case 'isOngoing':
          updated.isOngoing = value as boolean;
          if (value) updated.endDate = null;
          break;
        case 'startDate':
          updated.startDate = value as string;
          break;
        case 'endDate':
          updated.endDate = value as string;
          break;
        default:
          if (name.startsWith('highlight-')) {
            const idx = parseInt(name.split('-')[1]);
            updated.highlights[idx] = value as string;
          }
          break;
      }

      useProjectsStore.getState().updateProject(currentIndex, updated);
    },
    [currentIndex, projectInfo]
  );

  return (
    <Fragment>
      <TextField
        label="Title"
        value={projectInfo.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('title', e.target.value)}
        fullWidth
        required
        variant="filled"
        sx={{ mb: 2 }}
      />

      <TextField
        label="Tech Stack (comma separated)"
        value={projectInfo.techStack}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler('techStack', e.target.value)
        }
        fullWidth
        variant="filled"
        sx={{ mb: 2 }}
      />

      <TextField
        label="Project Link"
        value={projectInfo.url}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('link', e.target.value)}
        fullWidth
        variant="filled"
        sx={{ mb: 2 }}
      />

      <TextField
        label="Description"
        value={projectInfo.description}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('summary', e.target.value)}
        fullWidth
        multiline
        rows={3}
        variant="filled"
        sx={{ mb: 2 }}
      />

      <TextField
        label="Start Date"
        type="date"
        value={projectInfo.startDate || ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler('startDate', e.target.value)
        }
        fullWidth
        variant="filled"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 2 }}
      />

      {!projectInfo.isOngoing && (
        <TextField
          label="End Date"
          type="date"
          value={projectInfo.endDate || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeHandler('endDate', e.target.value)
          }
          fullWidth
          variant="filled"
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />
      )}

      <SwitchWidget
        label="Ongoing"
        value={projectInfo.isOngoing ?? false}
        onChange={(val: boolean) => onChangeHandler('isOngoing', val)}
      />

      {projectInfo.highlights.map((highlight, i) => (
        <TextField
          key={i}
          label={`Highlight ${i + 1}`}
          value={highlight}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(`highlight-${i}`, e.target.value)
          }
          fullWidth
          variant="filled"
          sx={{ mb: 1 }}
        />
      ))}
    </Fragment>
  );
};

export default Project;
