import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var require: any
const queryData = require( '../assets/apiURL.json');

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  queryURL;
  constructor(private _httpClient: HttpClient) {
    this.queryURL = queryData.apiQueryURL + "?keys=[\"cloud\",\"common\",\"new\"]&include_docs=true" ;

    console.log(queryData.apiQueryURL + "-------------show ");
   }

   getQueryData(): Observable<any>  {
    return this._httpClient.get(this.queryURL);
  }
}
