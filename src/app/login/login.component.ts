import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{DataService} from '../data.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[DataService],
})
export class LoginComponent implements OnInit {
    private uValue="";
    private pValue="";
    private error:String="";
    private response={
      "token":"1234"
    };
    
  constructor(private router:Router,private dataService:DataService) {
   }
   onSubmit(value:any)
    {
        
        console.log(value)
        //this.dataService.doPOST(value).subscribe(res => console.log(res));
        console.log(this.response);
        localStorage.setItem("token",this.response.token);
        localStorage.setItem("userId",value.userId);
        if(this.response.token!=null)
          {
        this.router.navigate(['chatbot']);
          }
      else
        {
          this.error="Invalid UserName or Password"
            console.log(this.error);
            this.uValue=null;
            this.pValue=null;
           
        }

    }
      

  ngOnInit() {
    //this.dataService.getData().subscribe(res=>console.log(res))
    
  }

}
