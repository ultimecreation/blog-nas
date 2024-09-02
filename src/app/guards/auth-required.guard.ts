import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authRequiredGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  if (authService.isAuthenticated()) return true
  return false;
};
