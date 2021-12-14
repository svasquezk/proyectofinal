import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Carrito } from '../carrito.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  lCarrito: Carrito[] = [];

  constructor(private peliService: ProductoService) { }

  ngOnInit() {
    this.getlCarrito();
  }

  getlCarrito() {
    this.lCarrito = this.peliService.getCarrito();
    console.log('---> ', this.lCarrito);
  }

}
