import { Injectable } from '@angular/core';
import {Plato} from '../shared/model/plato'
@Injectable()
export class PlatoServiceService {

  private platos:Plato[]=[];
  constructor() { }

  agregarPlato(plato:Plato){
    const nuevaLista = [ ...this.platos, plato ];    
    this.platos = nuevaLista;
  }

  getPlatos():Plato[]{
    return this.platos;
  }
}
