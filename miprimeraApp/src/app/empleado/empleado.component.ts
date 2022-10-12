import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public razonSocial!:String;  // creo una varible RazonSocial para guardar el nombre de la empresa
  constructor() { }

  ngOnInit(): void {
  }

  //creo attributos del empleado
  nombre = 'Fredi';
  // apellido = 'Pinkus';
  edad = 10; // es una constante

  

  habilitacionCuadro = true; // si es verdadero el cuadro de texto del apellido se encuentra deshabilitado

  usuarioRegistrado = false;

  getRegistroUsuario(){
    this.usuarioRegistrado = !this.usuarioRegistrado; // cuando la llamo invierte el valor de usuarioRegistrado
  }

// lo unico que hace es que este disponible el valor de la cadena empresa.value.  Tiene que ser String o any
  llamaEmpresa(dato:any){ 
    this.razonSocial =  dato; //guardo en razonSocial el nombre ingresado de la empresa 
  }

}
