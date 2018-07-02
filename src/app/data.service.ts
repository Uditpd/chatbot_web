import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import{Observable} from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string="http://httpbin.org/get"
  constructor(private _http:Http) { }
  getData(){
    return this._http.get(this._url).map(res=>res.json());
  }
}
