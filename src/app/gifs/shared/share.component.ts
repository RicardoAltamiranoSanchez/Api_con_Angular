import { Component } from '@angular/core';
import {GifsService} from '../services/gifs.service';
@Component({
  selector: 'sidebar-app',
  templateUrl: './share.component.html',
  
})
export class sidebarComponent {

  constructor(private listaBusqueda:GifsService){}
  
  
  ObtenerLista(): string[]{
    return this.listaBusqueda.ListaBusqueda;
  }
//hacemos una funcion donde busque por los datos que ya estan guardados en el localstore
//y nos devuelva esa informacion
  Busqueda(argumento:string): void{
  //llamamos la funcion de BuscarImagenes y de ponemos el argumento para que nos 
  //actualize solo la pantalla 
  this.listaBusqueda.BuscarImagenes(argumento);
  } 
}
