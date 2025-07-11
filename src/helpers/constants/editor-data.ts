import BasicLayout from '@/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from '@/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from '@/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from '@/modules/builder/editor/modules/experience/ExperienceLayout';
import ActivitiesLayout from '@/modules/builder/editor/modules/activities/ActivitiesLayout';
import AwardsLayout from '@/modules/builder/editor/modules/awards/AwardsLayout';
import LanguageLayout from '@/modules/builder/editor/modules/languages/LanguageLayout';
import HobbiesLayout from '@/modules/builder/editor/modules/hobbies/HobbiesLayout';
import SoftSkillsLayout from '@/modules/builder/editor/modules/softSkills/SoftSkillsLayout';
import ProjectLayout from '@/modules/builder/editor/modules/experience/Projects/ProjectLayout'; // ✅ Add this
import VolunteeringLayout from '@/modules/builder/editor/modules/volunteering/VolunteeringLayout';
import Volunteer from '@/modules/builder/editor/modules/volunteering/components/Volunteer';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout },
  'skills-and-expertise': { title: 'Skills and expertise', component: SkillsLayout },
  education: { title: 'Education', component: EducationLayout },
  experience: { title: 'Experience', component: ExperienceLayout },
  activities: { title: 'Activities', component: ActivitiesLayout },
  awards: { title: 'Awards', component: AwardsLayout },
  hobbies: { title: 'Hobbies', component: HobbiesLayout },
  'soft-skills': { title: 'Soft Skills', component: SoftSkillsLayout },
  languages: { title: 'Languages', component: LanguageLayout },
volunteer:{title: 'Volunteering', component: VolunteeringLayout}, // ✅ Add this
  // ✅ ✅ Add this:
  projects: { title: 'Projects', component: ProjectLayout },
};
