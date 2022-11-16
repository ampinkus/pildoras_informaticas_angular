import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public razonSocial!: String;  // creo una varible RazonSocial para guardar el nombre de la empresa
  //creo attributos del empleado
  public nombre: String = '';
  // apellido = 'Pinkus';
  edad: Number = 0;
  numeroLetras = 0;
  habilitacionCuadro = false; // si es verdadero el cuadro de texto del apellido se encuentra deshabilitado
  usuarioRegistrado = true; // si está en false no aparece el tick del campo, como se invoca luego la función getRegistroUsuario va a pasar a false
  textoDeRegistro = 'No hay nadie registrado'
   // Creo una propiedad para controlar la posibilidad de habilitar o deshabilitar el ingreso del correo electrónico
   habilitacionEmail:boolean = true; // inicial esta deshabilitado

  constructor() { }

  ngOnInit(): void {
    //creo atributos del empleado
    this.nombre = 'Fredi';
    // apellido = 'Pinkus';
    this.edad = 18;
    this.numeroLetras = 0; // cuando inicializo la página es cero
  }

  getNumeroLetras() {
    this.numeroLetras++;
  }

  getRegistroUsuario() {
    this.usuarioRegistrado = false; // cuando la llamo elimina el tick en el checkbox, el archivo html invoca esta opción cuando arranca la página
  }

  // lo unico que hace es que este disponible el valor de la cadena empresa.value.  Tiene que ser String o any
  llamaEmpresa(dato: any) {
    this.razonSocial = dato; //guardo en razonSocial el nombre ingresado de la empresa 
  }

  setUsuarioRegistrado() { // presento un alerta cuando hago click en el cuadro
    alert('El usuario se acaba de registrar');
    this.habilitacionEmail = false ; // habilito el campo para ingresar el Email
  }



}
