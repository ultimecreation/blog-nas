import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser: any = null
  constructor(private httpClient: HttpClient) { }

  register(user: User) {
    return this.httpClient.post<{ user: User }>('http://localhost:3000/users', user)
  }

  login(email: string, password: string) {
    return this.httpClient.get(`http://localhost:3000/users?email=${email}`)
  }

  logout() {
    return localStorage.removeItem('auth')
  }

  getLoggedUser() {
    if (localStorage.getItem('auth') !== null) {
      this.loggedUser = JSON.parse(localStorage.getItem('auth') as string)
    }
    return this.loggedUser
  }

  setLoggedUser(user: { id: string, email: string }) {
    return localStorage.setItem('auth', JSON.stringify(user))
  }

}
