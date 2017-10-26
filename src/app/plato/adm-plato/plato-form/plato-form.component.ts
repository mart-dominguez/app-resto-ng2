import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Plato} from '../../../shared/model/plato';
import {IPlatoService} from '../../iplato-service';
import { PlatoAbstractService } from '../../plato-abstract-service';
@Component({
  selector: 'app-plato-form',
  templateUrl: './plato-form.component.html',
  styleUrls: ['./plato-form.component.css']
})
export class PlatoFormComponent implements OnInit {

  @ViewChild('miFrm') public platoForm: NgForm;
  
  constructor(private miServicio:PlatoAbstractService) { }

  ngOnInit() {
  }

  onCreatePlato(plato:Plato) {
    console.log(plato);
    this.miServicio.agregarPlato(plato)
      .subscribe( () => this.platoForm.resetForm());
  } 

}
