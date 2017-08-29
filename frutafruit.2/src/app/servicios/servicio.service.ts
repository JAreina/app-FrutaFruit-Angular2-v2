import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; // OPERADOR MAP PARA HTTP 

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ServicioService {
    frutas:any={};
    query :string =`http://localhost:9999/api/frutas`;


    constructor ( private _http:Http){}

    obtenerFrutas():any{
          return this._http.get(this.query)
          .toPromise()
          .then(response =>
                response.json())
              .catch(this.handleError);
          
    }

// Implement a method to handle errors if any
private handleError(error: any): Promise<any> {
    console.error('HA OCURRIDO UN ERROR ', error);
    return Promise.reject(error.message || error);
  }


}
