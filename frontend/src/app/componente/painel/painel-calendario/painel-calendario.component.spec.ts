import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCalendarioComponent } from './painel-calendario.component';

describe('PainelCalendarioComponent', () => {
  let component: PainelCalendarioComponent;
  let fixture: ComponentFixture<PainelCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
