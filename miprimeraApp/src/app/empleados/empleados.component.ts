import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados', // este es el nombre que tengo que poner el HTML si quiero usar el componente empleados
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
