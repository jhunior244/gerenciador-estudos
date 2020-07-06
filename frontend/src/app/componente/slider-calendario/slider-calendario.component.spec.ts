import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCalendarioComponent } from './slider-calendario.component';

describe('SliderCalendarioComponent', () => {
  let component: SliderCalendarioComponent;
  let fixture: ComponentFixture<SliderCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
