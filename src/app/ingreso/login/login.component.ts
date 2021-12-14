import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';
import { ClienteService } from 'src/app/services/cliente.service';

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
 
  constructor(private fb: FormBuilder, private router: Router,
              private cliService : ClienteService,  private toastrService: ToastService) { }

  ngOnInit() {
  }

  ingresar() {
    if(this.frmLogin.valid) {

      const usuario = this.frmLogin.get('nomUsuario').value;
      const pass = this.frmLogin.get('password').value;

      const resultUsuario = this.cliService.getCliente(usuario, pass);

      if(!resultUsuario) {
        // Mensaje
        const options = { opacity: 1 };
        this.toastrService.error('', 'El usuario no se encuentra registrado', options);
        return;
      }

      console.log(resultUsuario);
      this.router.navigate(['/peliculas']);
    }
  }

 
}
