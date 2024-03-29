import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayarDirective } from './directives/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { RecetaFiltroPipe } from './pipes/receta-filtro.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { PruebasComponent } from './paginas/pruebas/pruebas.component';
import { NumeroElementosPipe } from './pipes/numero-elementos.pipe';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { AutoGrowDirective } from './directives/auto-grow.directive';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginComponent } from './paginas/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComprasComponent } from './paginas/compras/compras.component';
import { ListadoComponent } from './paginas/compras/listado/listado.component';
import { DetalleComponent } from './paginas/compras/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    PokemonRestComponent,
    EstilosComponent,
    JuegoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    RecetasComponent,
    RecetaFiltroPipe,
    Error404Component,
    SaludarComponent,
    ComparadorComponent,
    PruebasComponent,
    NumeroElementosPipe,
    TareasComponent,
    AutoGrowDirective,
    PrivadoComponent,
    LoginComponent,
    ComprasComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Modulo para hacer el ruteo
    HttpClientModule, // Modulo para llamadas por HTTP
    FormsModule, // modulo para poder usar ngModel en los campos input (banana in a box)
    NgbModule,
    ReactiveFormsModule, // Para los formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
