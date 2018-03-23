import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from './structure/workout';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class WorkoutService {

  private workoutUrl : string;
  constructor(
    private http: HttpClient,
     private urlProv: BaseurlService
  ) {
    this.workoutUrl = urlProv.getCompleteServiceUrl("workout");
   }
  
  defineWorkout(workout: any): Observable<any>{
    return this.http.post<any>(this.workoutUrl, workout);
  }
}

