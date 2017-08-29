import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../servicios/servicio.service";
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-mostrador',
  templateUrl: './mostrador.component.html',
  styleUrls: ['./mostrador.component.css']
})
export class MostradorComponent implements OnInit {
 frutas : any[]=[];
error : any;

  constructor(private _servicio:ServicioService,) {
                        }

  ngOnInit() {
    this.obtenerFrutas();
  }
  obtenerFrutas(){
    return this._servicio.obtenerFrutas()
              .then(frutas => this.frutas =frutas)
              .catch(error=> this.error = error);                             
  
  }


}
