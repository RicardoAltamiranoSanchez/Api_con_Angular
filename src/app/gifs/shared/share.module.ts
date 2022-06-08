//este es un modulo y sirve como para agrupar todos los componentes y poderlos utilizar
//en el modulo principal seria como un index en node express 
import { NgModule } from '@angular/core';//libreria de angular para los modulos
import { CommonModule } from '@angular/common';
import { sidebarComponent } from './share.component';




@NgModule({
    //aqui ponemos los componentes que utiliza este modulo o esta utilizando
    declarations: [
        sidebarComponent,
       
    ],
    //aqui lo vamos a ser visible a todos los componentes seria en public del modulo
    exports: [
        sidebarComponent
   
    ],
    imports: [
    //el CommonModule es para usar las directivas de angular ejemplo el ngFor y ngif
        CommonModule
    ]
})
//solo importamos la clase al modulo principal para utlizarlo
export class sidebarModule { 


}