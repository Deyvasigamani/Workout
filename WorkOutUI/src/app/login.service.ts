import { Injectable } from '@angular/core';
import {BaseurlService} from './baseurl.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private loginUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: BaseurlService
  ) { 
    this.loginUrl = urlProv.getCompleteServiceUrl("user/login");
  }

  login(username: string, password: string): Observable<any>{
    let headers = new HttpHeaders()
            .set('userName', username)
            .set('password', password);

    return this.http.get<any>(this.loginUrl, {headers});
  }

}
