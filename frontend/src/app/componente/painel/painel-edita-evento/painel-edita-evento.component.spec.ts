import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEditaEventoComponent } from './painel-edita-evento.component';

describe('PainelEditaEventoComponent', () => {
  let component: PainelEditaEventoComponent;
  let fixture: ComponentFixture<PainelEditaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelEditaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelEditaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
