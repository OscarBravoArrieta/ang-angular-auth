 import { Component, OnInit, inject } from '@angular/core'
 import { FormBuilder, Validators } from '@angular/forms'
 import { Router, ActivatedRoute } from '@angular/router'
 import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
 import { AuthService } from '@services/auth.service'

 @Component({
     selector: 'app-login-form',
     templateUrl: './login-form.component.html'
 })
 export class LoginFormComponent implements OnInit {

     private formBuilder = inject(FormBuilder)
     private router = inject(Router)
     private route = inject(ActivatedRoute)
     private authService = inject(AuthService)

     faPen = faPen
     faEye = faEye
     faEyeSlash = faEyeSlash
     showPassword = false
     status: string = 'init'

     form = this.formBuilder.nonNullable.group({
         email: ['', [Validators.email, Validators.required]],
         password: ['', [ Validators.required, Validators.minLength(6)]],
     })

     //--------------------------------------------------------------------------------------------

     constructor() {

         this.route.queryParamMap.subscribe(params => {
             const email = params.get('email')

             if (email) {
                 this.form.controls.email.setValue(email)
             }

         })

     }

     //--------------------------------------------------------------------------------------------

     ngOnInit() {

       console.log('')

     }

     //--------------------------------------------------------------------------------------------

     doLogin() {

         if (this.form.valid) {
             this.status = 'loading'
             const { email, password } = this.form.getRawValue()
             this.authService.login(email, password)
             .subscribe({
                 next: () => {

                    this.router.navigate(['/app'])

                 },
                 error: () => {

                 }
             })
         } else {
             this.form.markAllAsTouched()
         }
     }

 }
