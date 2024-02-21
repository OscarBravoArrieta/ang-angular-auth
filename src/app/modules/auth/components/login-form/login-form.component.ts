 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, Validators } from '@angular/forms';
 import { Router, ActivatedRoute } from '@angular/router';
 import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

 @Component({
     selector: 'app-login-form',
     templateUrl: './login-form.component.html'
 })
 export class LoginFormComponent implements OnInit {

     form = this.formBuilder.nonNullable.group({
         email: ['', [Validators.email, Validators.required]],
         password: ['', [ Validators.required, Validators.minLength(6)]],
     });
     faPen = faPen;
     faEye = faEye;
     faEyeSlash = faEyeSlash;
     showPassword = false;
     status: string = 'init';

     constructor(
         private formBuilder: FormBuilder,
         private router: Router,
         private route: ActivatedRoute
     ) {
         this.route.queryParamMap.subscribe(params => {
             const email = params.get('email')

             if (email) {
                 this.form.controls.email.setValue(email)
             }

         })
     }
     ngOnInit() {

       console.log('')

     }

     doLogin() {
         if (this.form.valid) {
             this.status = 'loading';
             const { email, password } = this.form.getRawValue();
             // TODO
         } else {
             this.form.markAllAsTouched();
         }
     }
 }
