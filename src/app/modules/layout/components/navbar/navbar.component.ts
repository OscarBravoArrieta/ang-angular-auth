 import { Component, inject  } from '@angular/core'
 import { Router } from '@angular/router'
 import {
     faBell,
     faInfoCircle,
     faClose,
     faAngleDown
 } from '@fortawesome/free-solid-svg-icons'


 import { AuthService } from '@services/auth.service'
 import { TokenService } from '@services/token.service'

 @Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
 })
 export class NavbarComponent {

     private authService = inject(AuthService)
     private router = inject(Router)
     private tokenService = inject(TokenService)
     faBell = faBell
     faInfoCircle = faInfoCircle
     faClose = faClose
     faAngleDown = faAngleDown

     isOpenOverlayAvatar = false
     isOpenOverlayBoards = false

     user$ = this.authService.user$

     constructor() {}

     //--------------------------------------------------------------------------------------------

     logout() {

         this.authService.logout()
         this.router.navigate(['/login'])

     }

     //--------------------------------------------------------------------------------------------

     isValidToken() {

         console.log('Token es válido.... ', this.tokenService.isValidToken)

     }

     //--------------------------------------------------------------------------------------------
}
