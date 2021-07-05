import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url ="https://localhost:44339/api/user"

  constructor(private https: HttpClient) { }
  signUpUser(newUser: User):Observable<number>{
    console.log(newUser)
    console.log("service")
    
     return this.https.post<number>(`${this.Url}/singupuser`, newUser)
   }

   getList(num:number):Observable<string[]>
   {
    return this.https.get<string[]>(`${this.Url}/getList/${num}`)
   }
   SignIn(id:number):Observable<number>
   {
    return this.https.get<number>(`${this.Url}/singinuser/${id}`)
   }
}
