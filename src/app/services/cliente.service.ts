import { Injectable } from '@angular/core';
import { Cliente } from '../ingreso/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  lCLientes: Cliente[] = [
    {
      nombreUsuario: "test",
      password: "test",
      correo: 'test@test.cl',
    },
    {
      nombreUsuario: "sandra",
      password: "1234",
      correo: 'sandra@test.cl',
    }
  ]

  constructor() { }


  getCliente(usuario: string, pass: string) {
    // Obtiene el registro desde la session
     const cli = JSON.parse(localStorage.getItem('cliente'));
     this.lCLientes.push(cli);
     return this.lCLientes.find(c => c.nombreUsuario === usuario &&  c.password === pass);
  }

}
