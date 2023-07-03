import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronesVigentesSinTrabajadoresComponent } from './patrones-vigentes-sin-trabajadores.component';

describe('PatronesVigentesSinTrabajadoresComponent', () => {
  let component: PatronesVigentesSinTrabajadoresComponent;
  let fixture: ComponentFixture<PatronesVigentesSinTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronesVigentesSinTrabajadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronesVigentesSinTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
