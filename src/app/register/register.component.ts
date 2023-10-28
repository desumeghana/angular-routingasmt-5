import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public registerForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  get name(): AbstractControl { return this.registerForm.get('name'); }
  get email(): AbstractControl { return this.registerForm.get('email'); }
  get password(): AbstractControl { return this.registerForm.get('password'); }
  get confirmPassword(): AbstractControl { return this.registerForm.get('confirmPassword'); }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  passwordMatchValidator: ValidatorFn = (control: any): {[key: string]: boolean} | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password!.value !== confirmPassword!.value) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };
}
