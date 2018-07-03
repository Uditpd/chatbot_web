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
   

  constructor(private router:Router,private dataService:DataService) {
   }
   onSubmit(value:any)
    {
        console.log(this.dataService);
        console.log(value.userName)
        this.dataService.doPOST(value).subscribe(res => console.log(res.status));
        this.router.navigate(['chatbot']);
    }
      

  ngOnInit() {
    //this.dataService.getData().subscribe(res=>console.log(res))
    
  }

}
