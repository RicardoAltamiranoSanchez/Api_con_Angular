import { Component,ElementRef,ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
//iniciamos una variable desde el construtor de tipo del servicio que hicimos para la lista
constructor(private listaBusqueda:GifsService){}




//el ViewChild es un decorador sirver para buscar un elemento en el html o el id por ejemplo aqui
//El ElementRef es un tipo de dato y es el tipo cuando de damos enter al buscar es para interfaz
//yl HTMLInputElement es es para que nos de el value ya viene imprementado por default en angular o js
// y el ! es para que no sea nulo o nos deje pasar cuando sea nudo
@ViewChild("buscarTexto") buscarTexto!:ElementRef<HTMLInputElement>;
//documentacion de este operado ! https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
//no me agarra con id="id" me agarra asi  #buscarTexto el ViewChild es para que busque el elemento en el html
//se pone dentro en el html para poder usarlo y hacer referencia al objeto o el input que esta en el html
BuscarImagenes() {


 const valor=this.buscarTexto.nativeElement.value;
 //hacemos si que no registre valores vacios o campo vacio y nos retorne nada
 if(valor.trim().length === 0){
 return ;
 } 
 this.listaBusqueda.BuscarImagenes(valor);
 this.buscarTexto.nativeElement.value="";
}




}
