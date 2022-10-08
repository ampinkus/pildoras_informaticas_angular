import { Component } from '@angular/core';

@Component({ // decorador que acompaña a la clase AppComponent
  selector: 'app-root', 
/* 
   el selector que está en: 
   <body>
      <app-root></app-root>
  </body>
  Por eso cuando voy a index.html se ejecuta este método
*/
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
// Esta es la funcion que se va  ejecutar en:  bootstrap: [AppComponent]. 
// O sea que la página WEB comienza con el método que está encerrado entre [] luego de bootstrap:  
export class AppComponent {  
  title = 'miprimeraApp';
  saludo = 'Hola Angular'
}
