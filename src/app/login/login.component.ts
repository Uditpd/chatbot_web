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
      EmployeeID: "", 
    IsAdmin: true,
    EmployeeName: "",
    token: null
    };
 
    
  constructor(private router:Router,private dataService:DataService) {
   }
   onSubmit(value:any)
    {
        
        console.log(value)
         //comment  the next sixteen line below  when not working with server
        this.dataService.doPOST(value).subscribe(res => {
          console.log(res);
          if(res.statusCode==200)
            {
          console.log(res.body)
          this.response=res.body;
        
          console.log(this.response);
          localStorage.setItem("token",this.response.token);
          localStorage.setItem("userId",this.response.EmployeeID);
          localStorage.setItem("userName",this.response.EmployeeName);
          this.router.navigate(['chatbot']);
          }
          else
          {
            this.error="Invalid UserName or Password"
              console.log(this.error);
              this.uValue=null;
              this.pValue=null;
          }
          },err=>{
              this.error="Server Error Please Try after Sometime";
              this.uValue=null;
              this.pValue=null;
        });


        // setTimeout(()=>{},500)


        //uncomment only the next line below when working without server
           //this.router.navigate(['chatbot']);
        
    }
      

  ngOnInit() {
    this.error=null;
  }

}
