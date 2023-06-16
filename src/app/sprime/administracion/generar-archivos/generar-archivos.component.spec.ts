import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarArchivosComponent } from './generar-archivos.component';

describe('GenerarArchivosComponent', () => {
  let component: GenerarArchivosComponent;
  let fixture: ComponentFixture<GenerarArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarArchivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
