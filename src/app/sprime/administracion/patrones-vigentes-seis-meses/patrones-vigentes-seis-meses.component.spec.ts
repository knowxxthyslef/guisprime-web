import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  PatronesVigentesSeisMesesComponent } from './patrones-vigentes-seis-meses.component';


describe('PatronesVigentesSinTrabajadoresComponent', () => {
  let component: PatronesVigentesSeisMesesComponent;
  let fixture: ComponentFixture<PatronesVigentesSeisMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronesVigentesSeisMesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronesVigentesSeisMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
