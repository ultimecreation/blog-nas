import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  public loginForm: any = null
  public errorMsg: string = ''

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  onSubmit() {
    this.errorMsg = ''
    const { email, password } = this.loginForm.value

    this.authService.login(email, password).subscribe({
      next: (data: any) => {
        if (data.length === 1) {
          delete data[0].password
          this.authService.setLoggedUser(data[0])
          window.location.replace('/')
        } else {
          this.errorMsg = "Invalid credentials"
        }
      }, error: error => {
        console.log(error.message)
      }
    })



  }
}
