import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';
  //la inyección de un servicio se cumple siempre a través de un constructor
  // cuando se crea un componente desde el CLI siempre se crea un constructor SALVO en app.components.ts
  // tengo que inyectar el servicio donde agrego un empleado

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    // si implemento OnInit es lo primero que se ejecuta cuando se inicializa la clase
    //en el array empleados que tengo en esta clase hay que almacenar la informacion que viene de la inyeccion
    this.empleados = this.empleadosService.empleados;
  }

  // debo definir aquí el array de empleados para que el componente hijo pueda obtener la información.
  empleados: Empleado[] = [];
  //enlazo con con el ngModel del mismo nombre para guardar los datos que pongo en el formulario
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    // creo un empleado nuevo con la información que viene de los cuadros de la forma
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    // uso el servicio de alerta antes de agregar el empleado nuevo
    // this.miServicio.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);
    // puedo invocar el método del servicio EmpleadosService.  Le tengo que pasar los datos del empleado que quiero agregar
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
}
