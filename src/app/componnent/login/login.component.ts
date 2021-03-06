import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IdUser:number ;
  user: User = new User();
  userForm: any;
  currenttype1: string;
  currentStatus1: string;
  currenttype2: string;
  currentStatus2: string;
  eye: string = "fa fa-fw fa-eye field-icon toggle-password";
  slash: string = "fa fa-fw fa-eye-slash field-icon toggle-password";
  constructor(private UserService: UserService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]],
      'accept': ['', [Validators.requiredTrue]]
    }
    //  { validators: CheckPassword('password', 'confirm') });

  ,);

    this.currenttype1 = "fa fa-fw fa-eye field-icon toggle-password";
    this.currentStatus1 = "password";
    this.currenttype2 = "fa fa-fw fa-eye field-icon toggle-password";
    this.currentStatus2 = "password";
  }
  SignInUser()
{
  
  console.log(this.IdUser);
  this.UserService.SignIn(this.IdUser).subscribe(idUser=> {console.log(idUser)})
}
toggle1() {
  if (this.currentStatus1 == "text") {
    this.currenttype1 = this.eye;
    this.currentStatus1 = "password"
  }
  else {
    this.currenttype1 = this.slash;
    this.currentStatus1 = "text"
  }
}


toggle2() {
  if (this.currentStatus2 == "text") {
    this.currenttype2 = this.eye;
    this.currentStatus2 = "password"
  }
  else {
    this.currenttype2 = this.slash;
    this.currentStatus2 = "text"
  }}
  }
  


