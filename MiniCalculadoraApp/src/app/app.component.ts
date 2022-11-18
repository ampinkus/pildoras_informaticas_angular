import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mini Calculadora';
  //creamos las clases para almacenar los valores numericos
  numero1: number = 0; //los campos donde ingreso las variables
  numero2: number = 0;
  resultado: number = 0; // el campo resultado

  //creo los métodos para hacer los cálculos

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(): void {
    this.resultado = this.numero1 / this.numero2;
  }
}
