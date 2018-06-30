import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    onSubmit(value:any)
    {
        console.log(value)
    }

  constructor() {

   }

  ngOnInit() {
  }

}
