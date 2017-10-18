import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Plato} from '../../../shared/model/plato';
import {PlatoServiceService} from '../../plato-service.service';

@Component({
  selector: 'app-plato-form',
  templateUrl: './plato-form.component.html',
  styleUrls: ['./plato-form.component.css']
})
export class PlatoFormComponent implements OnInit {

  @ViewChild('miFrm') public platoForm: NgForm;
  
  constructor(private miServicio:PlatoServiceService) { }

  ngOnInit() {
  }

  onCreatePlato(plato:Plato) {
    console.log(plato);
    this.miServicio.agregarPlato(plato);
    this.platoForm.resetForm();
  } 

}
