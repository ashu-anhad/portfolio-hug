import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.scss',
})
export class Register implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const signupData = {
        name: this.signUpForm.get('name')?.value as string,
        email: this.signUpForm.get('email')?.value as string,
        password: this.signUpForm.get('password')?.value as string,
      };
      this.authService.signup(signupData).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
    }
  }
}
