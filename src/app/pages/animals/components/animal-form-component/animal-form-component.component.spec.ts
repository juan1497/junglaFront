import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFormComponentComponent } from './animal-form-component.component';

describe('AnimalFormComponentComponent', () => {
  let component: AnimalFormComponentComponent;
  let fixture: ComponentFixture<AnimalFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
