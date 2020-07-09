import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelListaResumoComponent } from './painel-lista-resumo.component';

describe('PainelListaResumoComponent', () => {
  let component: PainelListaResumoComponent;
  let fixture: ComponentFixture<PainelListaResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelListaResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelListaResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
