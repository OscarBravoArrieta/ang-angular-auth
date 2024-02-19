 import { Component, inject } from '@angular/core'
 import { FormBuilder, Validators } from '@angular/forms'
 import { Router } from '@angular/router'
 import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


 import { CustomValidators } from '@utils/validators'
 import { RequestStaus } from '@models/request-status.model'
 import { AuthService } from '@services/auth.service'

 @Component({
     selector: 'app-register-form',
     templateUrl: './register-form.component.html',
 })
 export class RegisterFormComponent {

     form = this.formBuilder.nonNullable.group({
         name: ['', [Validators.required]],
         email: ['', [Validators.email, Validators.required]],
         password: ['', [Validators.minLength(8), Validators.required]],
         confirmPassword: ['', [Validators.required]],
     }, {
         validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
     })

     // -------------------------------------------------------------------------------------------

     status: string = 'init'
     faEye = faEye
     faEyeSlash = faEyeSlash
     showPassword = false

     private authService = inject(AuthService)
     private router = inject(Router)


     // -------------------------------------------------------------------------------------------

     constructor(
         private formBuilder: FormBuilder,

     ) {}

     // -------------------------------------------------------------------------------------------

     register() {

         if (this.form.valid) {
             this.status = 'loading'
             const { name, email, password } = this.form.getRawValue()
             this.authService.register(name, email, password)
             .subscribe({
                 next: () => {
                     this.status = 'succes'
                     this.router.navigate(['/login'])
                 },
                 error: () => {
                     this.status = 'error'

                 }
             })
             console.log(name, email, password)
         } else {
             this.form.markAllAsTouched()
        }

     }

     // -------------------------------------------------------------------------------------------
}
