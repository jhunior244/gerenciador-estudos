import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEditaTopicoComponent } from './dialogo-edita-topico.component';

describe('DialogoEditaTopicoComponent', () => {
  let component: DialogoEditaTopicoComponent;
  let fixture: ComponentFixture<DialogoEditaTopicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEditaTopicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEditaTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
