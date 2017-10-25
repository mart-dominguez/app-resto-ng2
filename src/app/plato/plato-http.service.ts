import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlatoHttpService {

  constructor(private http: HttpClient){
  }
}
