import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


// quiero usar este servicio para inyectar el servicio de presentar el mensaje de alerta que esta 
// incluido en el servicio servicio-empleados.service. Queremos inyectar el servicio de ventana emergente 
// en este servicio de agregar empleados.
@Injectable({ // indico que en este servicio puedo inyectar otro usando un decorador
  providedIn: 'root',
})
export class EmpleadosService {
  // tenemos que crear un constructor donde realizamos la inyección
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {

  } 

  empleados: Empleado[] = [
    // creo un arreglo de empleados
    new Empleado('Juan', 'Pinkus', 'Gerente General', 10000),
    new Empleado('Tomas', 'Pinkus', 'Director', 5000),
    new Empleado('Fredi', 'Pinkus', 'Gerente', 2000),
    new Empleado('Alfredo', 'Pinkus', 'Cadete', 100),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {

    // llamo al servicio de ventana emergente
    this.servicioVentanaEmergente.muestraMensaje("Vamos a agregar a: " + "\n" + empleado.nombre + "\n" + "salario: " + empleado.salario)
    // agrego el empleado al arreglo de empleados usando este servicio
    this.empleados.push(empleado);
  }
}
