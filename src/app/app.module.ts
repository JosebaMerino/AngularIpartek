import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Modulo para llamadas por HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
