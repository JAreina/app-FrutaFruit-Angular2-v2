import {Routes,RouterModule}  from '@angular/router';
import { MostradorComponent } from "../mostrador/mostrador.component";
import { AppComponent } from "../app.component";
import { UsuarioComponent } from "../usuario/usuario.component";

import { BienvenidaComponent } from "../bienvenida/bienvenida.component";
//import { CanActivateAuthGuard } from "../servicios/authGuard.service";


const appRoutes :Routes= [

  // redireccionamientos
  {
    path:'',
    redirectTo:'/bienvenida',
    pathMatch:'full'
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    //canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'mostrador',
    component: MostradorComponent,
   
  }

];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [BienvenidaComponent,
                                                          UsuarioComponent,
                                                          MostradorComponent]