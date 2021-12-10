import { IfStmt } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // frmLogin: FormGroup;
  frmLogin = new FormGroup({
    nomUsuario: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
 
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    if(this.frmLogin.valid) {
      this.router.navigate(['/producto']);
    }
  }

  clienteAdd(data){
    debugger
    console.log('LA DATA', data);
  }

}
