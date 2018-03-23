import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class WorkouttxnlistService {

  private getWorkoutLisTxntUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: BaseurlService
  ) { 
      this.getWorkoutLisTxntUrl = urlProv.getCompleteServiceUrl("workoutTxn");
  }

  getWorkoutTxnList(workoutId: Number): Observable<any>{
    console.log("Url: "+this.getWorkoutLisTxntUrl+"/"+workoutId);
    return this.http.get<any>(this.getWorkoutLisTxntUrl+"/"+workoutId);
  }

}
