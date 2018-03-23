import { Injectable } from '@angular/core';

@Injectable()
export class BaseurlService {

  baseUrl : string;
  constructor() { 
    this.baseUrl="http://localhost:8080/";
  }

  getCompleteServiceUrl(urlStub : string) :string{
    return this.baseUrl + urlStub;
  }

}
