import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEstudosComponent } from './tela-estudos.component';

describe('TelaEstudosComponent', () => {
  let component: TelaEstudosComponent;
  let fixture: ComponentFixture<TelaEstudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEstudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
