import { Injectable } from '@angular/core';

//importamos la lista de contacto mock
import { CONTACTOS } from '../mocks/contacto.mock';
import { IContacto } from '../models/IContacto';

//Importamos Observables de rxjs
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  
  constructor() { }

  obtenerContactos():Promise<IContacto[]>{
    return Promise.resolve(CONTACTOS); //nos devuelve una lista de contacto
  }

  //Creamos un Observable
  obtenerContactoPorId(id:number):Observable<IContacto> | undefined{
    const contacto = CONTACTOS.find((contacto:IContacto)=>contacto.id==id);

    let observable:Observable<IContacto> = new Observable(observer=>{

      observer.next(contacto);//emitir un valor a todo componente suscrito

      //Para cerrarlo
      observer.complete(); //No emite mas valores
    })
    if(contacto){
      return observable;
    }else{
      return;
    }
  }

  /* De esta manera se haria con Promise
  obtenerContactoPorId(id:number):Promise<IContacto> | undefined{
    const contacto = CONTACTOS.find((contacto:IContacto)=>contacto.id==id);

    if(contacto){
      return Promise.resolve(contacto);
    }else{
      return;
    }
  }*/
}

  /*
  obtenerContactoPorId(id:number):IContacto | undefined{
    const contacto = CONTACTOS.find((contacto:IContacto)=>contacto.id==id);

    if(contacto){
      return contacto
    }else{
      return;
    }
  }*/

