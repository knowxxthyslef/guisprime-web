import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronesPrimaMediaActualComponent } from './patrones-prima-media-actual.component';

describe('PatronesPrimaMediaActualComponent', () => {
  let component: PatronesPrimaMediaActualComponent;
  let fixture: ComponentFixture<PatronesPrimaMediaActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronesPrimaMediaActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronesPrimaMediaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
