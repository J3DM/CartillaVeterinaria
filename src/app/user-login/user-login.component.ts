import { Component, OnInit } from '@angular/core';
import {User} from '../models/User'
import { UserService } from '../service/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user:User

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.user=new User("","","","",[])
  }

  login(){
    console.log(this.user)
    this.userService.loginUser(this.user).subscribe(
      (res: Response)=>{
        let jsonToken=JSON.parse(JSON.stringify(res))
        localStorage.setItem('token',jsonToken.token)
        localStorage.setItem('userId',jsonToken.userId)
        console.log("Stored in the browser->",localStorage)
      },
      error=>{
        console.log('Error loging the user',error)
      }
    )
  }
  singUp(){
    
    this.userService.saveUser(this.user).subscribe(
      result=>{
        this.user=result['data']
        this.router.navigate(['/'])
      },
      error=>{
        console.log('Error saving the user',error)
      }
    )
  }
}
