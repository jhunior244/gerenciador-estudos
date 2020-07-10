import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEditaTituloResumoComponent } from './dialogo-edita-titulo-resumo.component';

describe('DialogoEditaTituloResumoComponent', () => {
  let component: DialogoEditaTituloResumoComponent;
  let fixture: ComponentFixture<DialogoEditaTituloResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEditaTituloResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEditaTituloResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
