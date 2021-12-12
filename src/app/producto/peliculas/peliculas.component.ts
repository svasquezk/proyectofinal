import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula.model';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
