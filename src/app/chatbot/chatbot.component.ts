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
  msg : String=null;
  user : String = "Udit"; 
  private request={
    "query":"",
    "token":""
  }
  private reply={
      "answer":"Hi there!!"
      };
  hid=true;
  userName="";
  userId="";
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
        this.msg=null;
        //comment  the next four line below  when not working with server

        this.dataService.doPOSTChat(request).subscribe(res => {console.log(res)
        this.reply=res
        this.msgs.push({"user":"Bot","reply":this.reply.answer});
        },err=>this.msgs.push({"user":"Bot","reply":"Server Issue Please Re-login & Try Again"}));


        //uncomment only the next line below when working without server

        // this.msgs.push({"user":"Bot","reply":this.reply.answer});
        
        // setTimeout(()=>{},500)
    }
      chatDisplay()
      {
        this.hid=!this.hid;
      }

    ngOnInit() {
     
      this.msgs.push({"user":"Bot","reply":"Welcome to TCS"});
      this.userId=localStorage.getItem("userId");
      this.userName=localStorage.getItem("userName");  
    }

}
