import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Esta es la funcion que se va  ejecutar en:  bootstrap: [AppComponent]. O sea que la página WEB comienza con el método que está
// encerrado entre [] luego de bootstrap:  
export class AppComponent {  
  title = 'miprimeraApp';
}
