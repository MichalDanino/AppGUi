import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { material } from '../Models/Material.model';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  Url ="https://localhost:44339/api/HandlingMaterials"
  constructor(private https: HttpClient) { }
  getListM():Observable<material[]>
   {
    return this.https.get<material[]>(`${this.Url}/GetlistMaterial`)
   }
   GetNameCategory():Observable<string[]>{
     return this.https.get<string[]>(`${this.Url}/GetNameRenovation`)
   }
   getMatrialByReno(NameReno:string):Observable<Map<string,Map<string,string[] >>>
   {
return this.https.get<Map<string,Map<string,string[] >>>(this.Url+"/GetNmaeByRevo/"+NameReno)
   }
}
