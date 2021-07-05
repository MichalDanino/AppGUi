import { Component, OnInit } from '@angular/core';
import { Worker } from '../../Models/Worker.model';
import {NgForm} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/Service/worker.service';
import { Specialty } from 'src/app/Models/Specialty.model';
import { MainService } from 'src/app/Service/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
Show:boolean=false;
  constructor(private workerService: WorkerService,private mainService:MainService,private router:Router) { }
  worker:Worker= new Worker()
  specialty :Specialty= new Specialty()
  NamesArea:string[]=[]
  ngOnInit(): void {
   this.GetNameArea();
  }
 

SignUpWorker()
{
  console.log(this.worker)
    this.workerService.SignUpWorker(this.worker).subscribe(a=> (console.log(a)));
    this.Show = true;
}
AddSpecialty()
{
  this.workerService.AddSpacialty(this.specialty).subscribe(a=> (console.log(a)))
}
GetNameArea(){
this.mainService.GetNameArea().subscribe(a=>{(this.NamesArea)=a});
}
Continue(){
  
    this.AddSpecialty();
    this.specialty=new Specialty();
 
}
GoHome()
{
  this.AddSpecialty();
  this.router.navigate(['/app-root']);
}


}
