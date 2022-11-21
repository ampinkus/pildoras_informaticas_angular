import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados: Empleado[] = [
    // creo un arreglo de empleados
    new Empleado('Juan', 'Pinkus', 'Gerente General', 10000),
    new Empleado('Tomas', 'Pinkus', 'Director', 5000),
    new Empleado('Fredi', 'Pinkus', 'Gerente', 2000),
    new Empleado('Alfredo', 'Pinkus', 'Cadete', 100),
  ];

  //enlazo con con el ngModel del mismo nombre para guardar los datos que pongo en el formulario
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado(){
    // creo un empleado nuevo con la información que viene de los cuadros de la forma
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // agrego el empleado al arreglo de empleados
    this.empleados.push(miEmpleado);

  }
}
