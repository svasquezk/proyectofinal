import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ingreso/login/login.component';
import { RegistroComponent } from './ingreso/registro/registro.component';
import { ListadoComponent } from './producto/listado/listado.component';
import { InfoComponent } from './producto/info/info.component';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { ProductoPagComponent } from './producto/producto-pag/producto-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListadoComponent,
    InfoComponent,
    CarritoComponent,
    ProductoPagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
