import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class WorkoutListService {

  private getWorkoutListUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: BaseurlService
  ) { 
     this.getWorkoutListUrl = urlProv.getCompleteServiceUrl("workout");
  }

  getWorkoutList(userId: Number): Observable<any>{
    return this.http.get<any>(this.getWorkoutListUrl+"/"+userId);
  }

}
