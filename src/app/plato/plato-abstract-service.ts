import { Plato } from '../shared/model/plato';
import { Observable } from 'rxjs/Observable'
import { IPlatoService } from './iplato-service';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class PlatoAbstractService implements IPlatoService{

    abstract agregarPlato(plato:Plato): Observable<any>;    

    abstract getPlatos():Observable<Plato[]>;

    abstract buscarPorId(id:number):Observable<Plato>;

    abstract borrar(id:number): Observable<any>;

    abstract actualizar(plato:Plato): Observable<any>;

}
