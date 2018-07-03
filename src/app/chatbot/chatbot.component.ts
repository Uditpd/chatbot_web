import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service'

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  providers:[DataService],
})
export class ChatbotComponent implements OnInit {
  private msgs=[];
  msg : String;
  user : String = "Udit"; 
  constructor(private router:Router,private dataService:DataService) {  }
  logout()
    {
        this.router.navigate(['']);
    }
    send()
    { 
      let temp = {"user":this.user,"reply":this.msg};
      this.msgs.push(temp);
      this.msg='';
      setTimeout(()=>{
        this.msgs.push({"user":"Bot","reply":"Hi there!"});
      },3000)
      
    }

    ngOnInit() {
    }

}
