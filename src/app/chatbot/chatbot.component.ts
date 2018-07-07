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
  private request={
    "query":"",
    "token":""
  }
   private reply={
        "answer":"Hi there!!"
      };
  constructor(private router:Router,private dataService:DataService) {  }
  logout()
    {
        this.router.navigate(['']);
        localStorage.clear();
    }
    send()
    { 
      let temp = {"user":this.user,"reply":this.msg};
     
      this.msgs.push(temp);
      let request={
          "userId":localStorage.getItem("userId"),
          "query":this.msg,
          "token":localStorage.getItem("token"),

        }
        console.log(request)
     // this.dataService.doPOSTChat(request).subscribe(res => this.reply=res);
      this.msg='';
      console.log(this.reply.answer);
      setTimeout(()=>{
        this.msgs.push({"user":"Bot","reply":this.reply.answer});
      },1000)
      
      
    }

    ngOnInit() {
      this.msgs.push({"user":"Bot","reply":"Welcome User!!!!"});
    }

}
