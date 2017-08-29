import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { ServicioService } from "./servicios/servicio.service";
import { MostradorComponent } from './mostrador/mostrador.component';
import { HttpModule } from "@angular/http";

import { routing, routedComponents } from "./rutas/rutas.component";
import { FooterComponent } from './footer/footer.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AuthService } from "./servicios/auth.service";
import { UsuarioComponent } from './usuario/usuario.component';

import { AuthModule } from "./auth/auth.module";
//import { CanActivateAuthGuard } from "./servicios/authGuard.service";




@NgModule({
  declarations: [
    AppComponent,
    MostradorComponent,
   
    routedComponents,// array de rutas
    FooterComponent, BienvenidaComponent, 
    UsuarioComponent ,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing  //modulo de enrutamiento
    ,AuthModule
  ],
  providers: [ServicioService,
                   AuthService,
                  // CanActivateAuthGuard
                   
                  


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
