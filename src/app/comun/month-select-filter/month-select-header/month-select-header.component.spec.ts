import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSelectHeaderComponent } from './month-select-header.component';

describe('MonthSelectHeaderComponent', () => {
  let component: MonthSelectHeaderComponent;
  let fixture: ComponentFixture<MonthSelectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthSelectHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthSelectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
