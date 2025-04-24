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
  
  loginError = signal<string | null>(null);
  loginSuccess = signal<boolean>(false);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginData.set({ email, password });
      console.log(`Attempting login with email: ${email} and password: ${password}`);
      
      if (email === 'test@example.com' && password === 'password123') {
        this.loginSuccess.set(true);
        this.loginError.set(null);
        console.log('Login successful');
        setTimeout(() => this.router.navigate(['/dashboard']), 2000); 
      } else {
        this.loginSuccess.set(false);
        this.loginError.set('Invalid email or password.');
        console.error('Login failed');
      }
    } else {
      this.loginSuccess.set(false);
      this.loginError.set('Please fill in all required fields correctly.');
      console.error('Form validation failed');
    }
  }

  goToRegister(): void {
    this.router.navigate(['/auth/register']); 
  }
}
