import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoComponent } from './carrito/carrito/carrito.component';
import { LoginComponent } from './ingreso/login/login.component';
import { RegistroComponent } from './ingreso/registro/registro.component';
import { ProductoPagComponent } from './producto/producto-pag/producto-pag.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'producto', component: ProductoPagComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
