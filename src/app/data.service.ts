import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import{Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  constructor(private _http:Http) { }
  
  doPOST(val) {
  console.log("POST");
  let url = "http://5f7076d5.ngrok.io/login_auth";
  return this._http.post(url,val).map(res=>res.json())
  .catch(this._errorHandler);
  }
  doPOSTChat(val) {
    console.log("POST");
    let url = "http://5f7076d5.ngrok.io/chat";
    return this._http.post(url,val).map(res=>res.json())
    .catch(this._errorHandler);
  }
  private _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error || "Some Error on Server Occured");
  }
}
