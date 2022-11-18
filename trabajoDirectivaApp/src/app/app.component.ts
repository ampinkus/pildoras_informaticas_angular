import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje: String = '';
  registrado: boolean = false;
  nombre: String = '';
  apellido: String = '';

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = `Usuario ${this.nombre} ${this.apellido} registrado con éxito`;
  }
}
