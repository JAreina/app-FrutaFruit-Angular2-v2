import { Component } from '@angular/core';
import { AuthService } from "./servicios/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent {
  title = 'app';
  ocultadaBienvenida:string;
  ocultoRegistro:string="hidden";
  usuarioOculto:string;
  ocultoMenu:string;
  menuNav:string ="hidden";

 // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
 constructor(private authService: AuthService) {
}


  ocultarBienvenida(){
    
      this.ocultadaBienvenida = "hidden";
    
   
  }
  mostrarBienvenida(){
    
      this.ocultadaBienvenida = "";
    
  }

  mostrarRegistro(){
    this.ocultoRegistro = "";
    this.usuarioOculto= 'hidden';
}
ocultarRegistro(){
this.ocultoRegistro = "hidden";
this.usuarioOculto="";
}
mostrarMenu(){
  this.ocultoMenu = "hidden";
  this.menuNav=""
}
ocultarMenu(){
this.ocultoMenu = "";
this.menuNav="hidden";
}
}
