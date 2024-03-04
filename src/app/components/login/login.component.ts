import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Llamada al método de inicio de sesión en el servicio de autenticación
    const isLoginSuccessful = this.authService.login(this.usuario, this.password);

    if (isLoginSuccessful) {
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
        this.authService.redirectUrl = '';
      } else {
        this.router.navigate(['/admin']);
      }
    } else {
      console.log('Inicio de sesión fallido');
    }
  }
}
