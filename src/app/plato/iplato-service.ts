import { Plato } from '../shared/model/plato';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'


export interface IPlatoService {
    agregarPlato(plato:Plato): Observable<any>;    
    getPlatos():Observable<Plato[]>;
    buscarPorId(id:number):Observable<Plato>;
    borrar(id:number): Observable<any>;
    actualizar(plato:Plato): Observable<any>;
    getPlatosUpdated():Subject<Plato>;
}
