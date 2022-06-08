import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';//la importa para poer usar como fetch y hacer peticiones http esta libreria es propio de javascript
import { AppComponent } from './app.component';
import {sidebarModule} from './gifs/shared/share.module';
import {GifsModule } from  './gifs/gifs.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,//la importamos de manera global normalmente en las peticones se hacen asi es com si fuera axios es
    sidebarModule,
    GifsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }