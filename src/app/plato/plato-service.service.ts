import { Injectable } from '@angular/core';
import {Plato} from '../shared/model/plato'
import { PlatoAbstractService } from './plato-abstract-service';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class PlatoServiceService extends PlatoAbstractService {

  private platos:Plato[]=[];
  constructor() {
    super();
   }

  agregarPlato(plato:Plato): Observable<any>{
    const nuevaLista = [ ...this.platos, plato ];    
    this.platos = nuevaLista;
    return Observable.empty();
  }

  getPlatos():Observable<Plato[]>{
    return Observable.of(this.platos);
  }

  buscarPorId(id:number):Observable<Plato>{
    return Observable.empty();
  }
  
  borrar(id:number):Observable<any>{
    return Observable.empty();
  }

  actualizar(plato:Plato):Observable<any>{
    return Observable.empty();
  }
}
