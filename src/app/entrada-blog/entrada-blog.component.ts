import { Component } from '@angular/core';
import { Objeto } from './objeto.model';

@Component({
  selector: 'app-entrada-blog',
  templateUrl: './entrada-blog.component.html',
  styleUrls: ['./entrada-blog.component.css']
})
export class EntradaBlogComponent {
  objetos: Objeto[] = [
    { titulo: 'Objeto 1', descripcion: 'Descripción del objeto 1' },
    { titulo: 'Objeto 2', descripcion: 'Descripción del objeto 2' },
    { titulo: 'Objeto 3', descripcion: 'Descripción del objeto 3' },
    { titulo: 'Objeto 4', descripcion: 'Descripción del objeto 4' },
  ];

}
