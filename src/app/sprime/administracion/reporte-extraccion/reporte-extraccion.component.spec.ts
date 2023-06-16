import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteExtraccionComponent } from './reporte-extraccion.component';

describe('ReporteExtraccionComponent', () => {
  let component: ReporteExtraccionComponent;
  let fixture: ComponentFixture<ReporteExtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteExtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteExtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
