import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrasApmComponent } from './cifras-apm.component';

describe('CifrasApmComponent', () => {
  let component: CifrasApmComponent;
  let fixture: ComponentFixture<CifrasApmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CifrasApmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CifrasApmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
