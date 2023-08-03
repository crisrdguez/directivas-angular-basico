import { Component, OnInit } from '@angular/core';

export type Product = {
  nombre:string;
  precio:number;
  descripcion:string
}


@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent implements OnInit{

  listaElementos:string[] = ["Cerealitos","Arandanitos","Chocolate"];

  listaElementos2:Product[] = [
    {nombre:"patatas",precio:3,descripcion:"sabor barbacoa"},
    {nombre:"cocacola",precio:5,descripcion:"sabor lima"},
    {nombre:"donut",precio:30,descripcion:"sabor chocolate"}
  ]

  cargando:boolean=false;

  //Para trabajar con switch
  opcion:number=0;

  escogeOpcion(opcionEscogida:number){
    this.opcion = opcionEscogida; //implica un cambio en los elementos renderizados
  }

  constructor(){

  }

  ngOnInit(): void {
    


  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

}
