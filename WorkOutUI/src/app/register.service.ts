import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './structure/user';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class RegisterService {
  private registerUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: BaseurlService
  ) { 
    this.registerUrl = urlProv.getCompleteServiceUrl("user/register");
  }
  
  register(user: any): Observable<any>{
    return this.http.post<any>(this.registerUrl, user);
  }
}
