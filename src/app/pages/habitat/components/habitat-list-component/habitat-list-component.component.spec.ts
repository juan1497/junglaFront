import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatListComponentComponent } from './habitat-list-component.component';

describe('HabitatListComponentComponent', () => {
  let component: HabitatListComponentComponent;
  let fixture: ComponentFixture<HabitatListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitatListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitatListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
