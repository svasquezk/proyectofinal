import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private peliService: ProductoService) { }

  ngOnInit() {
    this.getlCarrito();
  }

  getlCarrito() {
    const lCarrito = this.peliService.getCarrito();
    console.log('---> ', lCarrito);
  }

}
