import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/Service/material.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild ('myCategory1',{static:false}) cat1:ElementRef;
  changeBa:boolean=false;

Pup:boolean =false;
listOfNemesReno:string[]=[]
listOfNemesRenoSelected:string[]=[]
  constructor(private MaterialServise: MaterialService,private router:Router) { }
ren:string="Room";
  ngOnInit(): void {
    this.GetAllCategory();
  }
  print(){
    console.log(this.listOfNemesRenoSelected);
  }
  pupTrue(){
    this.Pup=true;
  }
  GetAllCategory(){
    this.MaterialServise.GetNameCategory().subscribe(a=> 
      {
      (this.listOfNemesReno)=a;
  })
}
toppings: FormGroup;
fff:boolean
categories:string=''
checked(item)
{
  this.categories=this.categories+','+item
if(item=="אמבטיה")
{this.cat1.nativeElement.style.backgroundColor='red'}
}
routeToScraping()
{
 // sessionStorage.setItem('CategorySelected',this.codeReno.nativeElement.value)
this.router.navigate(['/app-scraping'])
  
}
}
