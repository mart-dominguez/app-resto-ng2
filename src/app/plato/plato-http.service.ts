import { Plato } from '../shared/model/plato';
import { Observable } from 'rxjs/Observable'
import { PlatoAbstractService } from './plato-abstract-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlatoHttpService  extends PlatoAbstractService {
    private server:string="http://localhost:3000/";
    private platos:Plato[]=[];
    constructor(private http: HttpClient){
      super();
    }

  agregarPlato(plato:Plato): Observable<any>{
    return this.http.post(this.server+"plato", plato);
  }

  getPlatos():Observable<Plato[]>{
    return this.http.get<Plato[]>(this.server+"plato");
  }

  buscarPorId(id:number):Observable<Plato>{
    return this.http.get<Plato>(this.server+"plato/"+id);
  }
  
  borrar(id:number):Observable<any>{
    return Observable.empty();
  }

  actualizar(plato:Plato):Observable<any>{
    return Observable.empty();
  }
}
