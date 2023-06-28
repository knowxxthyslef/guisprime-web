import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroExistenteUsuarioComponent } from './registro-existente-usuario.component';

describe('RegistroExistenteUsuarioComponent', () => {
  let component: RegistroExistenteUsuarioComponent;
  let fixture: ComponentFixture<RegistroExistenteUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroExistenteUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroExistenteUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
