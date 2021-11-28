import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsListComponentComponent } from './animals-list-component.component';

describe('AnimalsListComponentComponent', () => {
  let component: AnimalsListComponentComponent;
  let fixture: ComponentFixture<AnimalsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
