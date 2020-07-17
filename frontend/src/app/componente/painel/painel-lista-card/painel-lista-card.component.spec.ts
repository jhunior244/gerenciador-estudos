import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelListaCardComponent } from './painel-lista-card.component';

describe('PainelListaCardComponent', () => {
  let component: PainelListaCardComponent;
  let fixture: ComponentFixture<PainelListaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelListaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelListaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
