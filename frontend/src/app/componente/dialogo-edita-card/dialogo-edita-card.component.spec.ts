import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEditaCardComponent } from './dialogo-edita-card.component';

describe('DialogoEditaCardComponent', () => {
  let component: DialogoEditaCardComponent;
  let fixture: ComponentFixture<DialogoEditaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEditaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEditaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
