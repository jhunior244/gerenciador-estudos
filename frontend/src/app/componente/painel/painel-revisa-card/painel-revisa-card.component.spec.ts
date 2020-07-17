import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelRevisaCardComponent } from './painel-revisa-card.component';

describe('PainelRevisaCardComponent', () => {
  let component: PainelRevisaCardComponent;
  let fixture: ComponentFixture<PainelRevisaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelRevisaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelRevisaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
