import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private authService: AuthService) { 
   this.authService.handleAuth();
  }

  ngOnInit() {
  }

}
