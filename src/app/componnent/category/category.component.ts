import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/Service/material.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { rendererTypeName } from '@angular/compiler';
import { Category } from 'src/app/Models/Category.model';

@Component({
  selector: 'app-category',
  templateUrl:'./category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild ('myCategory1',{static:false}) cat1:ElementRef;
  changeBa:boolean=false;
  selected: string;

Pup:boolean =false;
listOfCategory:string[]=[]
listOfNemesRenoSelected:string;
  constructor(private MaterialServise: MaterialService,private router:Router) { }
ren:string="Room";
panelColor = new FormControl('red');
  ngOnInit(): void {
    this.GetAllCategory();
  }
  
  pupTrue(){
    this.Pup=true;
  }
  GetAllCategory(){
    this.MaterialServise.GetNameCategory().subscribe(a=> 
      {
      (this.listOfCategory)=a;
  })
}
toppings: FormGroup;
fff:boolean
categories:string=''
checked(event:any)
{
  
  this.selected = event.target.id;
 this.listOfNemesRenoSelected =this.listOfNemesRenoSelected+','+this.selected;
}
ddd()
{console.log(this.listOfNemesRenoSelected);
  

  }
  Continue(){
    debugger
    sessionStorage.setItem('CategorySelected',this.listOfNemesRenoSelected);
    this.router.navigate(['/app-scraping']);

  }

}
