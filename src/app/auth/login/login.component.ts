import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginData = signal<{ email: string; password: string } | null>(null); 
  
  router = inject(Router);


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.loginData.set({ email, password }); 
      console.log(`Attempting login with email: ${email} and password: ${password}`);
    }
  }

  goToRegister(): void {
    this.router.navigate(['/auth/register']); 
  }
}
