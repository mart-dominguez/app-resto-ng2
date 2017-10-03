import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmPlatoComponent } from './adm-plato/adm-plato.component';
import { PlatoFormComponent } from './adm-plato/plato-form/plato-form.component';
import { PlatoListComponent } from './adm-plato/plato-list/plato-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdmPlatoComponent, PlatoFormComponent, PlatoListComponent],
  exports:[AdmPlatoComponent]
})
export class PlatoModule { }
