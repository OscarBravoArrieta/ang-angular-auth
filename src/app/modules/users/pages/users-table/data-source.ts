 import { DataSource } from '@angular/cdk/collections'
 import { BehaviorSubject, Observable } from 'rxjs'
 import { User } from '@models/user.models'

 export class DataSourceUser extends DataSource<User> {

     data = new BehaviorSubject<User[]>([])
     originalData: User[]= []

     connect(): Observable<User[]> {
         return this.data
     }

     init(data: User[]) {
         this.originalData = data
         this.data.next(data)
     }

     disconnect() { }

 }
