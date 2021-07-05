import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/Service/main.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
iii:number=4;
  constructor(private UserService: UserService,private router:Router,private MainService: MainService) { }
  newUser:User= new User();
  listNamesArea:string[]=[];
 id:number
 d:string='fr'
  ngOnInit(): void {
    this.GetNameArea();
  }
  SignUpUser(){
    
    this.UserService.signUpUser(this.newUser).subscribe(idUser => {this.newUser.IDUser= idUser;
  })
}
SignInUser()
{
  console.log(this.id);
  this.UserService.SignIn(this.id).subscribe(idUser=> {console.log(idUser)});
 this.GoHome();
}
GetList()
{console.log(this.id);
  this.router.navigate(['/app-feedbake']);
}
GetNameArea()
{
this.MainService.GetNameArea().subscribe(
   name=>{(this.listNamesArea)=name;} 
)

}
GoHome()
{
  this.router.navigate(['/app-root']);
}
}


