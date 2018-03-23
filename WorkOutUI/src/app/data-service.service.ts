import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  constructor() { }
  
  public userId: Number;
  
  public calBurntPerUnitTime: Number;
  
  public unitTime : string;
  
  public workoutId : Number;
  
  setWorkoutId(workoutId:Number){
      this.workoutId = workoutId;
      }
  getWorkoutId(): Number{
      return this.workoutId;
      }
  }
  