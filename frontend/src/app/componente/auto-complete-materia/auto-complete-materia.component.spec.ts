import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteMateriaComponent } from './auto-complete-materia.component';

describe('AutoCompleteMateriaComponent', () => {
  let component: AutoCompleteMateriaComponent;
  let fixture: ComponentFixture<AutoCompleteMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
