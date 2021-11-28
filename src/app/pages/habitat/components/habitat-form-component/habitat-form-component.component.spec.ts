import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatFormComponentComponent } from './habitat-form-component.component';

describe('HabitatFormComponentComponent', () => {
  let component: HabitatFormComponentComponent;
  let fixture: ComponentFixture<HabitatFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitatFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitatFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
