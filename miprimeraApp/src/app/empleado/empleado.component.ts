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
// lo unico que hace es que este disponible el valor de la cadena empresa.value.  Tiene que ser String o any
  llamaEmpresa(dato:any){ 
  }

}
