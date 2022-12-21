import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c/caracteristicas-empleados-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';

// tengo que crear las rutas, es un array de objetos.  Cada objeto es una ruta
const appRoutes:Routes = [
  // {path: 'path que voy a colocar en el navegador', component:'nombre del componente que voy a llamar en para ese path'}
  {path:'', component:HomeComponentComponent },//'' es el home
  {path:'proyectos', component:ProyectosComponentComponent },
  {path:'quienes', component:QuienesComponentComponent },
  {path:'contacto', component:ContactoComponentComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosCComponent,
    // tengo que declarar los componentes que uso
    HomeComponentComponent, 
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // si uso rutas tengo que importar este modulo e indicar que quiero usar las rutas de la constante appRoutes
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [ServicioEmpleadosService, EmpleadosService], // tengo que registrar los servicios  
  bootstrap: [AppComponent]
})
export class AppModule { }
