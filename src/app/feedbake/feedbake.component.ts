import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbake',
  templateUrl: './feedbake.component.html',
  styleUrls: ['./feedbake.component.css']
})
export class FeedbakeComponent implements OnInit {
id:string
  constructor() { }

  ngOnInit(): void {
  }
  ttt(){
  this.id=sessionStorage.getItem('iii');
}

}
