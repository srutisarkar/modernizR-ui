import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient: HttpClient) { }
  storeModernizrData;
  setModernizrData(modernizrData: any) {
    this.storeModernizrData = modernizrData
  }

  getMsetModernizrData(modernizrData: any) {
    return this.storeModernizrData;
  }

}
