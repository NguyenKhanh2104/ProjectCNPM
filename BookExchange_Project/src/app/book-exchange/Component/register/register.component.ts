import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    number: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirm: ['', [Validators.required, Validators.minLength(8)]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get firstName(): any {
    return this.registerForm.get('firstName');
  }
  get lastName(): any {
    return this.registerForm.get('lastName');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get number(): any {
    return this.registerForm.get('number');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  get confirm(): any {
    return this.registerForm.get('confirm');
  }
  registerFormSubmit(): void {
    const formData = this.registerForm.value;
    delete formData.confirm;
  
  }
}
