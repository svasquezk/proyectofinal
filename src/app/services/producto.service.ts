import { Injectable } from '@angular/core';
import { Pelicula } from '../producto/pelicula.model';
import { Carrito } from '../carrito/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  lPelicula: Pelicula[] = [
    {
      "id":1,
      "image": "https://cdn0.iconfinder.com/data/icons/movies-8/64/yoda_hollywood_cinema_film-128.png",
      "title": "Camiseta",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 2,
      "image": "https://cdn0.iconfinder.com/data/icons/movies-8/64/gandalf_hollywood_cinema_film-128.png",
      "title": "Hoodie",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 3,
      "image": "https://cdn0.iconfinder.com/data/icons/movie-filled-outline/340/movie_film_adventure_action_cinema_person_torch-128.png",
      "title": "Mug",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id":4,
      "image": "https://cdn0.iconfinder.com/data/icons/movies-8/64/harry_hollywood_cinema_film-128.png",
      "title": "Pin",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 5,
      "image": "https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_comic_batman_bat_man-128.png",
      "title": "Stickers",
      "price": 80000,
      "description": "bla bla bla bla bla"
    },
    {
      "id": 6,
      "image": "https://cdn0.iconfinder.com/data/icons/movies-8/64/Millennium_falcon_hollywood_cinema_film-128.png",
      "title": "Stickers",
      "price": 80000,
      "description": "bla bla bla bla bla"
    }
  ]

  lCarrito: Carrito[] = [];
  constructor() { }

  getPeliculas():Pelicula[]{ 
    return this.lPelicula;
  }

  getPelicula(id: number){
    return this.lPelicula.find(p => p.id === id);
  }


  // Agregar pelicula al carrito
  addCarrito(peli: Pelicula, usuario: string){
    let carrito: Carrito = {
      cantidad:1,
      id:peli.id,
      image: peli.image,
      description: peli.description,
      price: peli.price,
      title: peli.title,
      usuario
    }
  
    this.lCarrito.push(carrito);

    localStorage.setItem('carrito', JSON.stringify(this.lCarrito));
  }


  // Eliminar pelicula al carrito
  deleteCarrito(id: number){
    this.lCarrito.slice(id);
  }

  //Obtiene lista de peliculas en el carrito
  getCarrito():Carrito[]{   
    this.lCarrito.push(JSON.parse(localStorage.getItem('carrito')));
    return this.lCarrito;
  }


}
