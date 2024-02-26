 import { Injectable } from '@angular/core'
 import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
 import { jwtDecode, JwtPayload } from 'jwt-decode'

 @Injectable({
     providedIn: 'root'
 })
 export class TokenService {

     constructor() { }
     //--------------------------------------------------------------------------------------------

     saveToken(token: string) {

         setCookie('token-trello', token, {expires: 365, path: '/'})

     }

     //--------------------------------------------------------------------------------------------

     getToken() {

         const token = getCookie('token-trello')
         return token

     }

     //--------------------------------------------------------------------------------------------

     removeToken() {

         removeCookie('token-trello')

     }

     //--------------------------------------------------------------------------------------------

     saveRefreshToken(token: string) {

         setCookie('refresh-token-trello', token, {expires: 365, path: '/'})

     }

     //--------------------------------------------------------------------------------------------

    getRefreshToken() {

         const token = getCookie('refresh-token-trello')
         return token

     }

    //--------------------------------------------------------------------------------------------

     removeRefreshToken() {

         removeCookie('refresh-token-trello')

     }

     //--------------------------------------------------------------------------------------------

     isValidToken() {
         const token = this.getToken()

         if(!token) {

             return false
         }

         const decodeToken = jwtDecode<JwtPayload>(token)

         if(decodeToken && decodeToken?.exp) {

             const tokenDate = new Date(0)
             const today = new Date()
             tokenDate.setUTCSeconds(decodeToken.exp)
             return tokenDate.getTime() > today.getTime()


         }

         return false


     }

     //--------------------------------------------------------------------------------------------

     isValidRefreshToken() {

         const token = this.getRefreshToken()

         if(!token) {

             return false
         }

         const decodeToken = jwtDecode<JwtPayload>(token)

         if(decodeToken && decodeToken?.exp) {

             const tokenDate = new Date(0)
             const today = new Date()
             tokenDate.setUTCSeconds(decodeToken.exp)
             return tokenDate.getTime() > today.getTime()


         }

         return false


     }

     //--------------------------------------------------------------------------------------------

 }
