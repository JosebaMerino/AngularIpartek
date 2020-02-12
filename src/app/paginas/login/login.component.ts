import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router
  ) {
    console.trace('LoginComponent constructor');

    // Construir formulario
    this.formulario = this.builder.group({
      // definir los FormControl que son los inputs [value, [validaciones...] ]
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      password  : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]]
    });

  } // constructor

  ngOnInit() {
    console.log('LoginComponent ngOnInit');
  } // ngOnInit

  enviar(values: any) {
    console.trace('enviar formulario %o', values);

    const nombre = values.nombre;
    const password = values.password;
    const uLogeado = this.usuarioService.login(nombre, password);

    if(uLogeado) {
      console.trace('Usuario logeado con exito %o', uLogeado);
      this.router.navigate(['privado']);
    } else {
      console.warn('Usuario no logeado');
      alert('Por favor intenta logearte de nuevo');
    }


  } // enviar

}// LoginComponent
