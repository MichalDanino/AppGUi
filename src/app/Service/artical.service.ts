import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { material } from '../Models/Material.model';
import { ThrowStmt } from '@angular/compiler';
import { Artical } from '../Models/Artical.model';
@Injectable({
  providedIn: 'root'
})
export class ArticalService {
  Url ="https://localhost:44339/api/HandlingMaterials"
  constructor(private https: HttpClient) { }
  GetArtical():Observable<Array<Artical>>
  {
return this.https.get<Array<Artical>>(`${this.Url}/GetArtical`);
  }
}
