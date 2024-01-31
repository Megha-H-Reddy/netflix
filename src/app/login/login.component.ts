import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
declare  var google:any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router =inject(Router);


  ngOnInit():void {
    google.accounts.id.initialize({
      client_id:'690889633812-2kfvm8fbghik60cs87cpndq2151rtelj.apps.googleusercontent.com',
      callback:(resp:any)=> this.handleLogin(resp)
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      width:350
    })
  }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleLogin(resp:any){
   if(resp){
    //decode the token
    const payload =this.decodeToken(resp.credential);
    //store in session
     sessionStorage.setItem('loggedInUser',JSON.stringify(payload));
     //navigate to home

     this.router.navigate(['browse'])
   }
  }
 
}
