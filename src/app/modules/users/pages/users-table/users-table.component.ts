 import { Component, inject, OnInit } from '@angular/core'

 import { DataSourceUser } from './data-source'
 import { UsersService } from '@services/users.service'
 import { AuthService } from '@services/auth.service'
 import { User } from '@models/user.models'

 @Component({
     selector: 'app-users-table',
     templateUrl: './users-table.component.html'
 })
 export class UsersTableComponent implements OnInit  {

     private usersService = inject(UsersService)
     private authService = inject(AuthService)

     dataSource = new DataSourceUser()
     columns: string[] = ['id', 'avatar', 'name', 'email']
     user!: User | null

     constructor() {

     }
     ngOnInit(): void {

         this.usersService.getUsers().subscribe(users => {

             this.dataSource.init(users)

          })
        //   this.authService.getProfile().subscribe(user => {
        //       this.user = user
        //   })
        this.authService.user$.subscribe(user => {
             this.user = user
        })

     }

 }
