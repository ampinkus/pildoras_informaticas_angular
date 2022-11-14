import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public razonSocial!: String;  // creo una varible RazonSocial para guardar el nombre de la empresa
  //creo attributos del empleado
  nombre: String = 'Fredi';
  // apellido = 'Pinkus';
  edad: Number = 10;
  numeroLetras = 0;
  habilitacionCuadro = false; // si es verdadero el cuadro de texto del apellido se encuentra deshabilitado
  usuarioRegistrado = false; // si está en true no aparece el tick del campo
  textoDeRegistro = 'No hay nadie registrado'

  constructor() { }

  ngOnInit(): void {
    //creo attributos del empleado
    this.nombre = 'Fredi';
    // apellido = 'Pinkus';
    this.edad = 10;
    this.numeroLetras = 0;
  }

  getNumeroLetras() {  
    this.numeroLetras++;
  }

  getRegistroUsuario() {
    this.usuarioRegistrado = false; // cuando la llamo pone 
  }

  // lo unico que hace es que este disponible el valor de la cadena empresa.value.  Tiene que ser String o any
  llamaEmpresa(dato: any) {
    this.razonSocial = dato; //guardo en razonSocial el nombre ingresado de la empresa 
  }

  setUsuarioRegistrado(){ // presento un alerta cuando hago click en el cuadro
    alert('El usuario se acaba de registrar');
     
  }

}
