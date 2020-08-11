import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteTopicoComponent } from './auto-complete-topico.component';

describe('AutoCompleteTopicoComponent', () => {
  let component: AutoCompleteTopicoComponent;
  let fixture: ComponentFixture<AutoCompleteTopicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteTopicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
