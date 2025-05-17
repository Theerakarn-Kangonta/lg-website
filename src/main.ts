import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductComponent } from './app/components/product/product.component';
import { CrudComponent } from './app/components/crud/crud.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductComponent },
      { path: 'crud', component: CrudComponent },

    ]),
    provideHttpClient() // <-- Important for HttpClient!
  ]
});