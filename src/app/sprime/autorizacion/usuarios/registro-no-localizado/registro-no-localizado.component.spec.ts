import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNoLocalizadoComponent } from './registro-no-localizado.component';

describe('RegistroNoLocalizadoComponent', () => {
  let component: RegistroNoLocalizadoComponent;
  let fixture: ComponentFixture<RegistroNoLocalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroNoLocalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroNoLocalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
