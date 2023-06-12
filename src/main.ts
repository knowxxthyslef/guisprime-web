import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppInjectorService } from './app/comun/herencia/app-injector.service';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then((moduleRef) => {
    AppInjectorService.setInjector(moduleRef.injector);
  })
  .catch(err => console.error(err));
