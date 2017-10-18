import { Component, OnInit } from '@angular/core';
import {Plato} from '../../../shared/model/plato';
import {PlatoServiceService} from '../../plato-service.service';

@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {
  public listaPlatos:Plato[]=[];

  constructor(private miServicio:PlatoServiceService) { }

  ngOnInit() {
    this.listaPlatos=this.miServicio.getPlatos();    
  }

  refresh(){    
    this.listaPlatos = this.miServicio.getPlatos().slice();
    console.log(this.listaPlatos);
  }

}
