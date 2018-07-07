import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import{Observable} from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string="http://httpbin.org/get"
  private response={
      "token":""
    };

  constructor(private _http:Http) { }
  getData(){
    return this._http.get(this._url).map(res=>res.json());
  }
  doPOST(val) {
  console.log("POST");
  let url = "http://8d72bf82.ngrok.io/login";
  return this._http.post(url,val).map(res=>res.json());
}
doPOSTChat(val) {
  console.log("POST");
  let url = "http://8d72bf82.ngrok.io/chat";
  return this._http.post(url,val).map(res=>res.json());
}
}
