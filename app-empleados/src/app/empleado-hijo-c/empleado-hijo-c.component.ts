import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent implements OnInit {
  // con @Input() indico cuales son las variables que traigo del padre, 
  // en el padre definí [empleadoDeLista] = "empleado" e  [indice] = "i", tengo que definir ademas el tipo de variable
  @Input() empleadoDeLista: Empleado; // empleadoDeLista es del tipo Empleado
  @Input() indice:number ; // indice es numerica 

  constructor() {}

  ngOnInit(): void {}

// para completar la comunicacion desde el hijo al padre
  arrayCaracteristicas = ['']; // creo un arreglo con las características que voy agregando
  agregarCaracteristica(nuevaCaracteristica: string) { // tomo la nueva caracteristica
    this.arrayCaracteristicas.push(nuevaCaracteristica); // y la agrego al arreglo
  }
}
