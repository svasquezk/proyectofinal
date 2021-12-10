import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Output() clienteAdd : EventEmitter<any> = new EventEmitter();
  
  frmRegistro = new FormGroup({
    nomUsuario: new FormControl('', Validators.required),
    correo: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  cliente: Cliente[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  crearRegistro() {
    console.log('--->', this.frmRegistro.valid);
    if(this.frmRegistro.valid) {
      let cli: Cliente;
      cli = {
        nombreUsuario: this.frmRegistro.get('nomUsuario').value,
        correo: this.frmRegistro.get('correo').value,
        password: this.frmRegistro.get('password').value
      }
      // cli.nombreUsuario = this.frmRegistro.get('nomUsuario').value;
      // cli.correo = this.frmRegistro.get('correo').value;
      // cli.password = this.frmRegistro.get('password').value;

      this.cliente.push(cli);
      this.clienteAdd.emit('dadasjhsiaj');
      // this.router.navigate(['/login'])
    }

  }

}
