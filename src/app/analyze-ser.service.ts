import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var require: any
const data = require( '../assets/apiURL.json');

@Injectable({
  providedIn: 'root'
})
export class AnalyzeSerService {
  updateURL;
  constructor(private _httpClient: HttpClient) {
    this.updateURL = data.apiBaseURL ;

    console.log(data.apiBaseURL + "-------------show ");
   }

   addBaseProfile(baseData: any): Observable<any>  {
    return this._httpClient.post(data.apiBaseURL, baseData);
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  }

  getBaseProfileData(id: any): Observable<any>  {
    return this._httpClient.get(this.updateURL + "/" + id);
  }

  updateBaseProfileData(updateData: any, id: any): Observable<any>  {
    return this._httpClient.put(this.updateURL + "/" + id , updateData);
  }
}
