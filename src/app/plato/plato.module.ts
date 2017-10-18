import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmPlatoComponent } from './adm-plato/adm-plato.component';
import { PlatoFormComponent } from './adm-plato/plato-form/plato-form.component';
import { PlatoListComponent } from './adm-plato/plato-list/plato-list.component';
import { FormsModule }   from '@angular/forms';
import {PlatoServiceService} from './plato-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AdmPlatoComponent, PlatoFormComponent, PlatoListComponent],
  providers:[PlatoServiceService],
  exports:[AdmPlatoComponent]
})
export class PlatoModule { }
