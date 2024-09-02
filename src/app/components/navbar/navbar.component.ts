import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  public auth = inject(AuthService)
  private router = inject(Router)

  logout() {
    this.auth.logout()
    this.router.navigateByUrl('/')

  }
}
