import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// aqui se especifica cual es el módulo raiz de la applicacion, en este caso AppModule
platformBrowserDynamic().bootstrapModule(AppModule) 
  .catch(err => console.error(err));
