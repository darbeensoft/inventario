import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Propiedad para almacenar el estado de autenticación
  private isAuthenticated: boolean = false;

  // Propiedad para almacenar la URL a la que intentaba acceder el usuario antes de iniciar sesión
  redirectUrl: string = '';

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Método para simular un inicio de sesión
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  // Método para simular un cierre de sesión
  logout(): void {
    this.isAuthenticated = false;
  }
}
