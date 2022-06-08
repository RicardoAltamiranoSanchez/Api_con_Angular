import { Component } from '@angular/core';
import {  GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

constructor(private gifs:GifsService){}



ObtenerResultado():any[]{
return this.gifs.busquedaInformacion;

}



}
