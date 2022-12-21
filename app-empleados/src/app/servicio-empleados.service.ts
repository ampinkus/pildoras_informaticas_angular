// tengo que registrar todos los servicios en app.modules
// en providers: [ServicioEmpleadosService],

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  //creamos un servicio para mostrar los mensajes
  muestraMensaje(mensaje: string){
    alert(mensaje);
  }
}
