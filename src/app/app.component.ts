import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ok } from 'assert';
import { Observable } from 'rxjs';
import { NgwWowModule } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  visible:boolean=true;
  constructor(private router:Router) { }
  title = 'AppGUi';
  Gouser(){
  this.visible=false;
  this.router.navigate(['/app-user'])
}
 userLogedIn():boolean{
  return true;
}
}

