import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { MainService } from 'src/app/Service/main.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private UserService:UserService, private MainService:MainService) { }
NewUser:User= new User();
NamesArea:string[]=[];
@ViewChild ('myArea',{static:false}) area:ElementRef;

  ngOnInit(): void {
    this.GetNameArea()
  }
  SignUpUser()
  {
    this.NewUser.areaUser=this.area.nativeElement.value;
    this.UserService.signUpUser(this.NewUser).subscribe(a=>{console.log(a)});
  }
  GetNameArea()
  {
    this.MainService.GetNameArea().subscribe(a=>{(this.NamesArea)=a});
  }
}
