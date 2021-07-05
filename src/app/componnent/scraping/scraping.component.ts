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

const ELEMENT_DATA:listOfNameMat[]=[];



@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {
  displayedColumns = ['ticketNum', "assetID", "severity", "riskIndex", "riskValue", "ticketOpened", "lastModifiedDate", "eventType"];
    
  /** Whether the number of selected elements matches the total number of rows. */
  

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  

  



listmaterial = new Array<material>();
 // listOfMaterials:material[]=[]
 
  /** Whether the number of selected elements matches the total number of rows. */
  listOfNameMat:string[]=[]
  /** The label for the checkbox on the passed row */
 lisst:string[]=["wwww","gggg"]
  constructor(private matrialService:MaterialService ,private router:Router) {
   
   }

  ngOnInit(): void {
    this.getMatrialByReno();
  
//this.getUser();
  }
  @ViewChild(MatTable) table: MatTable<listOfNameMat>;
 
getUser(){
this.matrialService.getListM().subscribe(lisd => {(this.listmaterial) = lisd})
}
getMatrialByReno(){
  return  this.matrialService.getMatrialByReno('Room').subscribe(m=>{
    (console.log(m));
  })
}
}
