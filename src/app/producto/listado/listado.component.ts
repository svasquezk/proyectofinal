import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../product.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 @Input() producto: Producto;
 @Output() onVerDetalle: EventEmitter<any> = new EventEmitter();
 
  constructor(private router: Router) { }

  ngOnInit() {  
  }

  verDetalle(){
    console.log('verDetalle click');
    this.onVerDetalle.emit(this.producto.id);
  }

  agregarProdCarro(){

    //console.log('producto -> ', this.producto);
    
    this.router.navigate(['/carrito']);

  }

}
