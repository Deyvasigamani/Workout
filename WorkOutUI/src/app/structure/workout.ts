import { User } from './user'; 
export class Workout {
    workoutId: Number;
    title: string;
    calBurntPerUnitTime: number;
    unitTime: string;
    user: User;
  }