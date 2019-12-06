import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


declare var require: any
const queryDataTAPlatform = require( '../assets/apiURL.json');

@Injectable({
  providedIn: 'root'
})
export class AnalyzerplatformService {
  urlTAPlatform;
  urlTogenerateToken;
  private projectName = new BehaviorSubject("");
  project_Name_TAPlatform = this.projectName.asObservable();
  constructor(private _httpClient: HttpClient) { 
    console.log(queryDataTAPlatform.apiTAPlatform);
    this.urlTAPlatform = queryDataTAPlatform.apiTAPlatform;
    this.urlTogenerateToken = queryDataTAPlatform.apisonar;
    console.log(this.urlTogenerateToken);
  }
  setProjectName(projectname: any) {
    this.projectName.next(projectname);
  }

  getibmtaanalyze(taPlatformData: any): Observable<any>  {
    console.log(this.urlTAPlatform);
    console.log(taPlatformData);
    return this._httpClient.post(this.urlTAPlatform, taPlatformData);
  }

  generateTokenForSonar(generateToken: any): Observable<any>  {
    console.log(this.urlTogenerateToken);
    console.log(generateToken);
    return this._httpClient.post(this.urlTogenerateToken, generateToken);
  }


}
