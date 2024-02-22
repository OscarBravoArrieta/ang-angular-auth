 import { Component, inject, OnInit  } from '@angular/core'
 import { Router } from '@angular/router'
 import {
     faBell,
     faInfoCircle,
     faClose,
     faAngleDown
 } from '@fortawesome/free-solid-svg-icons'
 import { User } from '@models/user.models'

 import { AuthService } from '@services/auth.service'

 @Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
 })
 export class NavbarComponent implements OnInit{
     private authService = inject(AuthService)
     private router = inject(Router)
     faBell = faBell
     faInfoCircle = faInfoCircle
     faClose = faClose
     faAngleDown = faAngleDown

     isOpenOverlayAvatar = false
     isOpenOverlayBoards = false

     user!: User | null

     constructor() {}

     ngOnInit(): void {

         this.authService.getProfile().subscribe(user => {

             this.user = user

         })

     }

     logout() {

         this.authService.logout()
         this.router.navigate(['/login'])

     }
}
