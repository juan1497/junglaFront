import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailComponentComponent } from './animal-detail-component.component';

describe('AnimalDetailComponentComponent', () => {
  let component: AnimalDetailComponentComponent;
  let fixture: ComponentFixture<AnimalDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
