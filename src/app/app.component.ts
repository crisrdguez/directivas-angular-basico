import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  mensaje="";
  nombre:string="";
  apellido:string="";
  registrado=false;
  cargo:string="";
  salario:number=0;

  //para practicar ngFor - ejemplo entradas de un blog
  entradas:Array<{titulo:string}>;

  constructor(){
    this.entradas = [
      //en teoria esto vendria de consultar una bbdd
      {titulo:"Python cada día mas presente"},
      {titulo:"Java cada día mas presente"},
      {titulo:"JavaScript cada día mas presente"},
      {titulo:"Angular cada día mas presente"},
      {titulo:"PHP cada día mas presente"},
      {titulo:"React cada día mas presente"}
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje = "Usuario registrado con éxito";
    
    
  }
}
