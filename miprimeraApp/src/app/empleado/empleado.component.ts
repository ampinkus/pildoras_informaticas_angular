import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  //creo attributos del empleado
  nombre = 'Fredi';
  apellido = 'Pinkus';
  edad = 60;
  // empresa = '3Mar'

  /* // creo un método que retorna el nombre de la empresa
  getEmpresa() {
    return this.empresa
  }
 */

  llamaEmpresa(dato:String){ // lo unico que hace es tomar un valor de cadena de caracteres
  }

}
