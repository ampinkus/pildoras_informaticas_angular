import { Component } from '@angular/core';

@Component({
  // decorador que acompaña a la clase AppComponent
  selector: 'app-root',
  /* 
   este selector: selector: 'app-root', hace que en index.html al encontrar: 
   <body>
      <app-root></app-root>
    </body>
   se navegue a 'app.component.html' junto con la página de estilo de 'app.component.css'
*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Esta es la función que se va  ejecutar en: bootstrap: [AppComponent].
// O sea que la página WEB comienza con el método que está encerrado entre [] luego de bootstrap:
export class AppComponent {
  title = 'miPrimeraApp';
  subtitle = 'muy sencilla';
  saludo = 'Hola Angular';
}
