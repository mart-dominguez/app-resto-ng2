import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlatoModule } from './plato/plato.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AdmPlatoComponent} from './plato/adm-plato/adm-plato.component';


const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'platos', component: AdmPlatoComponent} 
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    PlatoModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
