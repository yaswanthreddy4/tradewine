import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userResponse:any;
  logindata={
  email:'',
  password:''
}
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }
login(data){
  this._auth.login(data).subscribe(
    res=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this._router.navigate(['home']);
    },
    err=>{
console.log(err);

    }
      
    
  )}
}
