import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPlatoComponent } from './adm-plato.component';

describe('AdmPlatoComponent', () => {
  let component: AdmPlatoComponent;
  let fixture: ComponentFixture<AdmPlatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPlatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
