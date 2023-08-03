import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/IContacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.css']
})
export class ListaContactoComponent implements OnInit{

  listaDeContactos:IContacto[]=[];
  contactoSeleccionado:IContacto | undefined;

  //subscripcion de servicio
  subscription:Subscription | undefined;

  constructor(private miServicio:ContactoService){ //para hacer uso de un servicio lo tenemos que inyectar en el constructor

  }

  ngOnInit(): void {
    //obtener la lista de contactos que nos brinda el servicio
    this.miServicio.obtenerContactos()
    .then((lista:IContacto[]) => this.listaDeContactos = lista)
    .catch((error)=>console.error(`Ha habido un error al recuperar la lista de contactos ${error}`))
    .finally(()=>console.log("Peticion de lista de contactos terminada"));
  }
  //Con Observable
  obtenerDatosContacto(id:number){
    this.subscription = this.miServicio.obtenerContactoPorId(id)?.subscribe(
      (contacto:IContacto)=>this.contactoSeleccionado=contacto)
  }

  ngOnDestroy():void{
    this.subscription?.unsubscribe();
  }

  //Asi lo hago con Promise
 /* obtenerDatosContacto(id:number){
    this.miServicio.obtenerContactoPorId(id)
    ?.then((contacto:IContacto)=>this.contactoSeleccionado=contacto)
    .catch((error)=>console.error(`Ha habido un error ${error}`))
    .finally(()=>console.log("Peticion de contacto por id terminada"));
  }*/

  /*Asi lo hacia antes de usar Promise
  obtenerDatosContacto(id:number){
    this.contactoSeleccionado=this.miServicio.obtenerContactoPorId(id);
  }*/

}
