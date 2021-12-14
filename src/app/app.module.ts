import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ingreso/login/login.component';
import { RegistroComponent } from './ingreso/registro/registro.component';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculaTarjetaComponent } from './producto/pelicula-tarjeta/pelicula-tarjeta.component';
import { PeliculasComponent } from './producto/peliculas/peliculas.component';
import { PeliculaComponent } from './producto/pelicula/pelicula.component';
import { ToastModule } from 'ng-uikit-pro-standard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CarritoComponent,
    PeliculaTarjetaComponent,
    PeliculasComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
