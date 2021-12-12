import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../pelicula.model';
import { ProductoService } from '../../services/producto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  peli: Pelicula;
  idPelicua: number;

  constructor(private activateRoute: ActivatedRoute, private peliServ: ProductoService,
    private route: Router) { 
    this.activateRoute.params.subscribe(params => { 
      this.peli = this.peliServ.getPelicula(+params['id']);
    })
  }

  ngOnInit() {

    
  }

  volverListadoProd() {
    this.route.navigate(['/peliculas'])
  }
}
