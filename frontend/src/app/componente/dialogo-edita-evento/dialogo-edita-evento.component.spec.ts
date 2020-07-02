import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEditaEventoComponent } from './dialogo-edita-evento.component';

describe('DialogoEditaEventoComponent', () => {
  let component: DialogoEditaEventoComponent;
  let fixture: ComponentFixture<DialogoEditaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEditaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEditaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
