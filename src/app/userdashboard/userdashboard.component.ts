import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  user:any;
  username:any;
  constructor(private router:Router){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null){
      this.user=JSON.parse(localStorage.getItem('user')||'{}');
      this.username=this.user.username;
    }
    else{
      this.router.navigateByUrl("/");
    }
  }

}
