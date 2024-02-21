 import { Injectable } from '@angular/core'
 import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

 @Injectable({
     providedIn: 'root'
 })
 export class TokenService {

     constructor() { }
     //--------------------------------------------------------------------------------------------

     saveToken(token: string) {

         //localStorage.setItem('token', token)
         setCookie('token-trello', token, {expires: 365, path: '/'})

     }

     //--------------------------------------------------------------------------------------------

     getToken() {

         //localStorage.setItem('token', token)
         const token = getCookie('token-trello')

     }

     //--------------------------------------------------------------------------------------------

     removeToken() {

         removeCookie('token-trello')

     }
     //--------------------------------------------------------------------------------------------

 }
