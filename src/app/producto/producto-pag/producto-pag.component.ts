import { Component, OnInit } from '@angular/core';
import { Producto } from '../product.model';

@Component({
  selector: 'app-producto-pag',
  templateUrl: './producto-pag.component.html',
  styleUrls: ['./producto-pag.component.css']
})
export class ProductoPagComponent implements OnInit {

  esDetalleProd = false;
  lProducto: Producto[] = [
    {
      "id":1,
      "image": "https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_9-128.png",
      "title": "Camiseta",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 2,
      "image": "https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_16_copy-128.png",
      "title": "Hoodie",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 3,
      "image": "https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_6-128.png",
      "title": "Mug",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id":4,
      "image": "https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_12_copy-128.png",
      "title": "Pin",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 5,
      "image": "https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_3-128.png",
      "title": "Stickers",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 6,
      "image": "https://cdn0.iconfinder.com/data/icons/food-set-4/64/Artboard_12-128.png",
      "title": "Stickers",
      "price": 80000,
      "description": "bla bla bla bla bla"
    }
  ]

  prod: Producto;
  constructor() { }

  ngOnInit() {
  }

  verDetalleProd(id: number) {
    console.log('producto ->', id);
    this.esDetalleProd = true;
    this.prod = this.lProducto.find(p => p.id);

  }

}
