import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministracionUsuarioComponent } from './home-administracion-usuario.component';

describe('HomeAdministracionUsuarioComponent', () => {
  let component: HomeAdministracionUsuarioComponent;
  let fixture: ComponentFixture<HomeAdministracionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdministracionUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdministracionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
