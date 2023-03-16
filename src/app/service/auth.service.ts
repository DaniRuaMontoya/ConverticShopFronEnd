import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  logout(): void {
    // Eliminar información de autenticación
    this.isAuthenticated = false;
    localStorage.removeItem('currentUser');
  }
}