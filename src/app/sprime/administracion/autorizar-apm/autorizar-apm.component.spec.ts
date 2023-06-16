import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarApmComponent } from './autorizar-apm.component';

describe('AutorizarApmComponent', () => {
  let component: AutorizarApmComponent;
  let fixture: ComponentFixture<AutorizarApmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarApmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizarApmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
