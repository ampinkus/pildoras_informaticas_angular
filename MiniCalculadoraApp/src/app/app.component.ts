import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  //creamos las clases para almacenar los valores numericos
  numero1: number = 0; //los campos donde ingreso las variables
  numero2: number = 0;
  resultado: number = 0; // el campo resultado

  //creo los métodos para hacer los cálculos
  
  sumar(): void {
  this.resultado =  Number(this.numero1) + Number(this.numero2);
  }
}
