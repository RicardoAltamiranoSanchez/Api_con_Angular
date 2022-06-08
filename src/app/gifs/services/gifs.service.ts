import { Injectable } from '@angular/core';
//solo importamos el HttpClient para utilizar las peticiones
// importamos el HttpParams para poder utilizar los parametros de las peticiones
import {HttpClient,HttpParams} from '@angular/common/http';

import { SearchGifsResponse ,Gif } from '../interfaces/gifs.interface';

@Injectable({
//el providedIn: 'root' es para que se pueda usar en toda la aplicacion
  providedIn: 'root'
})
export class GifsService {
//iniciamos nuestro servicio con el cliente de http para obtener la api de la imagenes cuando arranque el programa
//lo hacemos con el httpcliente para poder usar las peticiones
//el construtor solo se ejecuta una vez durante el programa
constructor(private http:HttpClient){
//iniciamos el valor si existe que nos devuelva el valor que esta en local Storage y lo convertimos en un json de nuevo o objeto
// el ! es para que nos ignore el  null y solo si esta vacio
if(localStorage.getItem('listaBusqueda') && localStorage.getItem('Busqueda')){
//iniciamos el la lista de busqueda si existe un valor de ponemos el valor que
//que esta por defecto en el localStorage
  this._listaBusqueda=JSON.parse(localStorage.getItem('listaBusqueda')!);
  this.busquedaInformacion=JSON.parse(localStorage.getItem('Busqueda')!);
}

}




//llave para las imagenes
private Api_key:string="K5lo3VhLwt13gJmmDeLnYsNtU5xCBYn7";
private apiUrl:string="https://api.giphy.com/v1/gifs"; 
private _listaBusqueda:string[]=[];
//hacemos un arreglo donde almacenamos la informacion de la api 
//de ponemos la interface de Gif fue la que hicimos en el programa de afuera https://app.quicktype.io/
public busquedaInformacion:Gif[]=[];
    
    
 get ListaBusqueda(){
 //hacemos esta para que no nos cambie el valor de nuestro arreglo original
 return [...this._listaBusqueda];
 }   
  
BuscarImagenes(busqueda:string){
//lo hacemos para que no se repita por que se repetia si tenia un espacio 
busqueda=busqueda.trim();
//lo convertimos en minusculas para tener un mejor control en nuestro arreglo
busqueda=busqueda.toLocaleLowerCase();

//en el if indicamos si no existe el elemento en el arreglo que lo inserte 
//usamos el includes para buscar si existe 
if(!this._listaBusqueda.includes(busqueda)){
//añadimos el valor a nuestro arreglo con unshift
this._listaBusqueda.unshift(busqueda);
this._listaBusqueda=this._listaBusqueda.splice(0,10);

//Utilizamos el localStorage para guardar la informacion de la busqueda y stringify para convertirlo en un string
localStorage.setItem('listaBusqueda',JSON.stringify(this._listaBusqueda));
console.log(this._listaBusqueda);
}

//hacemos los parametros para que se mas facil nuestro codigo de mantener y ser mas especificos
//el HttpParams nos sirve para hacer paramertro en una url  y simplificar el codigo
const params=new HttpParams()
            .set('api_key',this.Api_key)
            .set('limit', '15')
            .set('q',busqueda);

console.log(params);

//que es observaros en javascrip siver para añadir funcionadidades en ala hora de recibir la repuesta http
//es de tipo generico lo ponemos asi para que no nos pida el any o el valor en el resp pero ya tiene todo los paremetro. se hizo aqui https://app.quicktype.io/
//ponemos la variable de la url que esa api y de ponemos la funcion de buscar de la api
// por ultimo ponemos los parametros para buscar los valores con params 
  try {    
this.http.get<SearchGifsResponse>(`${this.apiUrl}/search`,{params:params})
.subscribe( (resp ) =>{
 const {data} =resp;

 this.busquedaInformacion=data;
 //Utilizamos el localStorage para guardar la informacion de la busqueda y stringify para convertirlo en un string
 localStorage.setItem('Busqueda',JSON.stringify(this.busquedaInformacion));
 
 console.log(data);
 
})
    
  } catch (error) {
    console.log(`Tipo de erro en la peticon de la Api ${error}`);
  }
    
  }
}  
//app en linea que nos ayuda hacer interfaces de tipo de nuestra peticiones
//asi no ponemos el any https://app.quicktype.io/
  
  
   

