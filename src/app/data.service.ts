import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = "http://15.207.204.95:8082/api/";
  
  constructor(private _http: HttpClient) { }

  login(user: any){
    const headers = { 'content-type': 'application/x-www-form-urlencoded'}  
    return this._http.post(this.apiURL + 'session', user, {'headers': headers})
  }

  getAllDevices(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this._http.get(this.apiURL + 'devices', httpOptions)
  }
}
