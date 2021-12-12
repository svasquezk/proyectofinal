import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Pelicula } from '../pelicula.model';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styleUrls: ['./pelicula-tarjeta.component.css']
})
export class PeliculaTarjetaComponent implements OnInit {

  
  @Input() peli: Pelicula;
  @Input() index: number;
  // @Output() onVolver: EventEmitter<any> = new EventEmitter();


  constructor(private route: Router, private peliServ: ProductoService,
    private toastrService: ToastService) { }

  ngOnInit() {
  }



  verDetalle() {
    console.log(this.index);
    this.route.navigate(['/pelicula', this.peli.id])
  }

  addCarrito() {
    this.peliServ.addCarrito(this.peli);
    const options = { opacity: 1 };
    this.toastrService.success('Pelicula agregada!', 'Se agregó al carrito!', options);
  }

}
