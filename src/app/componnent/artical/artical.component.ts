import { Component, OnInit } from '@angular/core';
import { ArticalService } from 'src/app/Service/artical.service';
@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {
listArtical:string[]=[];
  constructor(private articalService:ArticalService) {
    this.listArtical = ["a", "b", "c", "d"];
   }

  ngOnInit(): void {
  }
GetArticals(){
//this.articalService.GetArtical().subscribe(a=> {console.log(a)});
}

}
