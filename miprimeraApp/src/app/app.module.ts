import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// debo importar el método AppComponent para declarar que es el método que da arranque a la página WEB en bootstrap:
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component'; 
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
 // voy a arrancar la página con el método AppComponent 
 bootstrap: [AppComponent]
})
export class AppModule { }
