import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCronogramaComponent } from './select-cronograma.component';

describe('SelectCronogramaComponent', () => {
  let component: SelectCronogramaComponent;
  let fixture: ComponentFixture<SelectCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
