import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder) {
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
    console.trace('enviar formulario %o', values)
  } // enviar

}// LoginComponent
