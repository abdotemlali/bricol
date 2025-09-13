import { Skill } from './skill';

export interface Tasker {
  name: string;
  slogan: string;
  description: string;
  rating: number;
  img: string;
  skills: Skill[];
  completedTaskNumber: number;
}
