import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from '../Models/Worker.model';
import {FormsModule} from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Specialty } from '../Models/Specialty.model';
@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  Url ="https://localhost:44339/api/worker"
  constructor(private https: HttpClient) { }
  SignUpWorker(worker:Worker):Observable<number>{
    console.log(worker);
    return this.https.post<number>(`${this.Url}/singupworker`, worker)
  }
  AddSpacialty(sp: Specialty):Observable<number>
  {
    return this.https.post<number>(`${this.Url}/SingupLS`,sp)
  }
}
