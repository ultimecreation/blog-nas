import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../../directives/passwordsMatch.directive';
import { User } from '../../types/User';
import { AuthService } from '../../services/auth.service';
import { v4 as UuidV4 } from 'uuid'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
  private authService = inject(AuthService)
  private router = inject(Router)

  public registerForm: any = null

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
      {
        validators: passwordsMatchValidator
      })

  }

  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm')
  }

  onSubmit() {

    const { email, password } = this.registerForm.value
    const user: User = {
      id: UuidV4(),
      email,
      password
    }

    this.authService.register(user).subscribe({
      next: (data: any) => {
        if (data.id) {
          this.router.navigateByUrl(('login'))
        }
      }, error: error => {
        console.log(error)
      }
    })

    this.registerForm.reset()

  }
}
