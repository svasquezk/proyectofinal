import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../product.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() prod: Producto;

  constructor() { }

  ngOnInit() {
  }

}
