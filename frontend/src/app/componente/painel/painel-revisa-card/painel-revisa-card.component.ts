import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CardService } from 'src/app/servico/card/card.service';
import { Card } from 'src/app/servico/card/card';
import { ActivatedRoute } from '@angular/router';
import { configuracao } from 'src/app/configuracao';

@Component({
  selector: 'app-painel-revisa-card',
  templateUrl: './painel-revisa-card.component.html',
  styleUrls: ['./painel-revisa-card.component.css']
})
export class PainelRevisaCardComponent implements OnInit {

  public id = '33';
  public card: Card;
  public lista: Card[];
  @ViewChildren('flashCard') flashCard: QueryList<ElementRef>;
  constructor(
    private cardService: CardService,
    private activated: ActivatedRoute
  ) {
    this.activated.params.subscribe(params => {
      this.id = params[configuracao.parametroId];
      this.cardService.lista(this.id).subscribe(lista => {
        this.lista = lista;
        this.card = this.lista[0];
        this.lista.splice(0, 1);
      });
    });

  }

  ngOnInit() {
  }

  virar(obj: Card) {
    const flashCard = document.getElementById(obj.id.toString());

    if (flashCard.style.transform === 'rotateY(180deg)') {
      flashCard.style.transform = 'rotateY(0deg)';
    } else {
      flashCard.style.transform = 'rotateY(180deg)';
    }
  }
}
