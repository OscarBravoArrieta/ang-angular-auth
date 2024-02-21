 import { Injectable, inject } from '@angular/core'
 import { HttpClient } from '@angular/common/http'

 import { environment } from '@environments/environment'

 @Injectable({
     providedIn: 'root'
 })
 export class AuthService {

     private http = inject(HttpClient)

     apiUrl = environment.API_URL

     constructor() { }

     // --------------------------------------------------------------------------------------------

     login(email: string, password: string) {

         return this.http.post(`${this.apiUrl}/api/v1/auth`, {
             email,
             password
         })

     }

     // --------------------------------------------------------------------------------------------

     register(name: string, email: string, password: string) {

         return this.http.post(`${this.apiUrl}/api/v1/auth/register`,{
             name,
             email,
             password
         })

     }

     // --------------------------------------------------------------------------------------------

     isAvailabel(email: string) {

         return this.http.post<{isAvailable: boolean}>(`${this.apiUrl}/api/v1/auth/is-available`, {
             email
         })

     }





     // --------------------------------------------------------------------------------------------

 }
