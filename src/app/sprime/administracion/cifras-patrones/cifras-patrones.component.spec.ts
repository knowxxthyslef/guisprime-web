import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrasPatronesComponent } from './cifras-patrones.component';

describe('CifrasPatronesComponent', () => {
  let component: CifrasPatronesComponent;
  let fixture: ComponentFixture<CifrasPatronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CifrasPatronesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifrasPatronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
