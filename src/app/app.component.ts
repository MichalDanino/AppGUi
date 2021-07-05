import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
}

