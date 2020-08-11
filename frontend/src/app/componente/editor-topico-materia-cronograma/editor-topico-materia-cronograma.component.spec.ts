import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTopicoMateriaCronogramaComponent } from './editor-topico-materia-cronograma.component';

describe('EditorTopicoMateriaCronogramaComponent', () => {
  let component: EditorTopicoMateriaCronogramaComponent;
  let fixture: ComponentFixture<EditorTopicoMateriaCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTopicoMateriaCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTopicoMateriaCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
