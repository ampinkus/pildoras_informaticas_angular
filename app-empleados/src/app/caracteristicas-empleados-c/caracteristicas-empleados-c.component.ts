import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  templateUrl: './caracteristicas-empleados-c.component.html',
  styleUrls: ['./caracteristicas-empleados-c.component.css'],
})
export class CaracteristicasEmpleadosCComponent implements OnInit {
  // para generar un output para la comunicacion de hijo a padre
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  constructor(private miServicio:ServicioEmpleadosService){
  }

  ngOnInit(): void {}
  //defino una función para pasarle los datos del hijo al padre
  agregaCaracteristicas(value: string) {
    // agrego el alerta para caracteristicas
    // this.miServicio.muestraMensaje("Caracteristica: " + value); // lo eliminamos porque usamos el servicio recien creado dentro de empleados.service.ts 
    // agrego el empleado al arreglo de empleados
    // this.caracteristicasEmpleados.emit(value);
  }
}
