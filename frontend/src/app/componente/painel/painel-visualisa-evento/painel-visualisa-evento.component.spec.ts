import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVisualisaEventoComponent } from './painel-visualisa-evento.component';

describe('PainelVisualisaCardComponent', () => {
  let component: PainelVisualisaEventoComponent;
  let fixture: ComponentFixture<PainelVisualisaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelVisualisaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVisualisaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
