import { Component, OnInit } from '@angular/core';
import {Plato} from '../../../shared/model/plato';
import { PlatoAbstractService } from '../../plato-abstract-service';

@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {
  public listaPlatos:Plato[]=[];

  constructor(private miServicio:PlatoAbstractService) { }

  ngOnInit() {
    this.miServicio.getPlatos().subscribe((lista)=>{
      this.listaPlatos=lista;
    });    
    this.miServicio.getPlatosUpdated().subscribe(t => this.refresh());
  }

  ngOnDestroy() {
    this.miServicio.getPlatosUpdated().unsubscribe();
  }

  refresh(){    
    this.miServicio.getPlatos()
    .subscribe(
      (lista) =>{this.listaPlatos =  lista.slice()}
    );
    console.log(this.listaPlatos);
  }

}
