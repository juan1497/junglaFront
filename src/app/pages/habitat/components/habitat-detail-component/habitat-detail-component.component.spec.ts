import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatDetailComponentComponent } from './habitat-detail-component.component';

describe('HabitatDetailComponentComponent', () => {
  let component: HabitatDetailComponentComponent;
  let fixture: ComponentFixture<HabitatDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitatDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitatDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
