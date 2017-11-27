import { Plato } from '../shared/model/plato';
import { Observable } from 'rxjs/Observable'
import { PlatoAbstractService } from './plato-abstract-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class PlatoHttpService  extends PlatoAbstractService {
    private server:string="http://localhost:5000/";
    private platos:Plato[]=[];

    private platoUpdated = new Subject<Plato>();

    constructor(private http: HttpClient){
      super();
    }

  agregarPlato(plato:Plato): Observable<any>{
    return  this.http.post(this.server+"plato", plato).
      flatMap(z => {
        console.log(z);
        this.platoUpdated.next(plato);
        return Observable.of(z);      
    });
    
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

  getPlatosUpdated():Subject<Plato>{
    return this.platoUpdated;
  }
  
}
