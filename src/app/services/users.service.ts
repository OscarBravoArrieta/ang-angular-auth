 import { Injectable, inject } from '@angular/core'
 import { HttpClient } from '@angular/common/http'
 import { environment } from '@environments/environment'
 import { User } from '@models/user.models'
 import { checkToken } from '@interceptors/token.interceptor'


 @Injectable({
     providedIn: 'root'
 })
 export class UsersService {

     private http = inject(HttpClient)
     apiUrl = environment.API_URL

     constructor() { }

     //--------------------------------------------------------------------------------------------

     getUsers() {

         return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, { context: checkToken() })

     }

     //--------------------------------------------------------------------------------------------
 }
