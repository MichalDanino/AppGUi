import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listArtical:string[]=[];
  constructor( private router:Router) {    this.listArtical = ["a", "b", "c", "d"];
 }

  ngOnInit(): void {

  }
  GoToCategory()
  {
    this.router.navigate(["/app-category"])

  }

}
