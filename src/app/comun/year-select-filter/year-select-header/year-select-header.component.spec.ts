import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSelectHeaderComponent } from './year-select-header.component';

describe('YearSelectHeaderComponent', () => {
  let component: YearSelectHeaderComponent;
  let fixture: ComponentFixture<YearSelectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearSelectHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearSelectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
