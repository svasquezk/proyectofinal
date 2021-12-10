import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-pag',
  templateUrl: './ingreso-pag.component.html',
  styleUrls: ['./ingreso-pag.component.css']
})
export class IngresoPagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clienteAdd(data){
    console.log('LA DATA -> ', data);
  }
}
