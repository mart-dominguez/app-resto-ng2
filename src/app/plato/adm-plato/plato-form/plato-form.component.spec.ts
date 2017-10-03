import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoFormComponent } from './plato-form.component';

describe('PlatoFormComponent', () => {
  let component: PlatoFormComponent;
  let fixture: ComponentFixture<PlatoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
