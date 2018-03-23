import { Workout } from './workout'; 
import { DlDateAdapter, DlDateAdapterNative } from 'angular-bootstrap-datetimepicker';

export class WorkoutTxn {
    startTime: string ;
    stopTime: string ;
    duration: number;
    calBurnt: string;
    workout: Workout;
  }