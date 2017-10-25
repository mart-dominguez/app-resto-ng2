import { Component, OnInit } from '@angular/core';
import {Plato} from '../../../shared/model/plato';
import { IPlatoService } from '../../iplato-service';

@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {
  public listaPlatos:Plato[]=[];

  constructor(private miServicio:IPlatoService) { }

  ngOnInit() {
    this.miServicio.getPlatos().subscribe((lista)=>{
      this.listaPlatos=lista;
    });    
  }

  refresh(){    
    this.miServicio.getPlatos()
    .subscribe(
      (lista) =>{this.listaPlatos =  lista.slice()}
    );
    console.log(this.listaPlatos);
  }

}
