import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { User } from 'src/app/Models/user.model';
import { material } from 'src/app/Models/Material.model';
import { MaterialService } from 'src/app/Service/material.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


export interface listOfNameMat {
  name: string;
 mateials:string[];
}
export class m{
  Namemain: string;
  Sub_name:string;
  material:string[];
   
}

const ELEMENT_DATA:listOfNameMat[]=[];



@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {
  displayedColumns = ['ticketNum', "assetID", "severity", "riskIndex", "riskValue", "ticketOpened", "lastModifiedDate", "eventType"];
index=1;
list: m[]=[];
temp1:string[];
temp2:string;   
material:m;
listmaterial = new Array<material>();
listOfNameMat:string[]=[];
 lissSubREnovation:string[]=["חלונות","אריחים לקירות","שרותים"," מקלחון","כיור ","ריצוף","צביעת קירות"]
constructor(private matrialService:MaterialService ,private router:Router) {}

  ngOnInit(): void {
    this.getMatrialByReno();
    
  
//this.getUser();
  }
  @ViewChild(MatTable) table: MatTable<listOfNameMat>;
 
getMatrialByReno(){
  let categories = sessionStorage.getItem('CategorySelected');
  return  this.matrialService.getMatrialByReno(categories).subscribe(m=>{
    (this.AddMaterialToList(m));
  }) 
}


Scraping(){
  
}
AddMaterialToList(reno:any)
{
  
  let categories = sessionStorage.getItem('CategorySelected');
  let listTemp=categories.split(",");
  for(this.index=1; this.index<listTemp.length;this.index++){ 
      let MainTitle=listTemp[this.index]
      let jjj=reno[MainTitle];
      this.lissSubREnovation.forEach(element => {

         this.material = new m();
       try{
       this.temp1= jjj[element];
       if(this.temp1!=null){
      this.material.Namemain=MainTitle;
       this.temp2 =element;
       this.material.material=this.temp1;
       this.material.Sub_name=this.temp2;
       this.list.push(this.material)
      

             }
            }
       catch{
          
           }
        });
}}
 
    
}


