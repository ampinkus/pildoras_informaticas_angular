import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje: String = ''; // tenemos que definir aquí mensaje, nombre y apellido para poder utilizarlo
  registrado: boolean = false;
  nombre: String = '';
  apellido: String = '';
  cargo: string = '';
  entradas: any = []; // para guardar los títulos de los blogs, uso "any" porque "object" me da error

  constructor() {  // constructor para cargar las entradas
    this.entradas = [
      { titulo: 'Python presente' },
      { titulo: 'Java presente' },
      { titulo: 'C++ presente' },
      { titulo: 'Kotlin presente' },
    ]
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = `Usuario ${this.nombre} ${this.apellido} registrado con éxito`;
  }
}
