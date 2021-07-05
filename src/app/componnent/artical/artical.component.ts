import { Component, OnInit } from '@angular/core';
import { ArticalService } from 'src/app/Service/artical.service';
@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {

  constructor(private articalService:ArticalService) { }

  ngOnInit(): void {
  }
GetArticals(){
//this.articalService.GetArtical().subscribe(a=> {console.log(a)});
}

}
