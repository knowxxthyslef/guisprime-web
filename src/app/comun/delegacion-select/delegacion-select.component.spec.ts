import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegacionSelectComponent } from './delegacion-select.component';

describe('DelegacionSelectComponent', () => {
  let component: DelegacionSelectComponent;
  let fixture: ComponentFixture<DelegacionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegacionSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelegacionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
