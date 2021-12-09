import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../product.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() prod: Producto;
  @Output() onVolver: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  volverListadoProd(){
    this.onVolver.emit(true);
  } 

}
