import { AfterViewChecked, Component, ElementRef, ViewChild, Input, ViewChildren, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { configuracao } from 'src/app/configuracao';
import { Card } from 'src/app/servico/card/card';
import { CardService } from 'src/app/servico/card/card.service';
import { AfterContentInit, ContentChildren, Directive, QueryList } from '@angular/core';

@Component({
  selector: 'app-painel-revisa-card',
  templateUrl: './painel-revisa-card.component.html',
  styleUrls: ['./painel-revisa-card.component.css']
})
export class PainelRevisaCardComponent implements AfterViewChecked {

  public id = '33';
  private indice = 0;
  public card: Card;
  public lista: Card[];
  public existeCard = false;
  public exigeBotaoNavegacao = false;
  public cartoes: HTMLElement[] = [];
  @ViewChild('anterior', { static: true }) anterior: ElementRef;
  @ViewChild('proximo', { static: true }) proximo: ElementRef;
  @ViewChild('flashCard', { static: true }) flashCard: ElementRef;
  constructor(
    private cardService: CardService,
    private activated: ActivatedRoute
  ) {
    this.activated.params.subscribe(params => {
      this.id = params[configuracao.parametroId];
      this.cardService.lista(this.id).subscribe(lista => {
        this.lista = lista;
        if(this.lista.length === 0){
          this.existeCard = true;
          this.exigeBotaoNavegacao = true;
        } else if(this.lista.length === 1) {
          this.existeCard = true;
          this.exigeBotaoNavegacao = true;
        } else {
          this.existeCard = true;
          this.exigeBotaoNavegacao = true;
        }
      });
    });

  }

  ngAfterViewChecked(): void {
    this.cartoes = Array.from(this.flashCard.nativeElement.children);
    if (this.cartoes.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.cartoes.length; i++) {
        if (this.indice === i) {
          this.cartoes[this.indice].style.display = 'flex';
        } else {
          this.cartoes[i].style.display = 'none';
        }
        this.cartoes[i].style.width = '100%';
        this.cartoes[i].style.height = '100%';
        this.cartoes[i].style.justifyContent = 'center';
        this.cartoes[i].style.alignItems = 'center';
      }
    }
  }

  errouCard(card: Card) {
    const flashCard = document.getElementById(card.id.toString());
    if (flashCard.style.transform === 'rotateY(180deg)') {
      flashCard.style.transform = 'rotateY(0deg)';
    }
    this.indice = this.indice++ === this.cartoes.length - 1 ? 0 : this.indice++;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.cartoes.length; i++) {
      this.cartoes[i].style.display = 'none';
      this.cartoes[i].style.width = '100%';
      this.cartoes[i].style.height = '100%';
      this.cartoes[i].style.justifyContent = 'center';
      this.cartoes[i].style.alignItems = 'center';
    }
    this.cartoes[this.indice].style.display = 'flex';
    this.cartoes[this.indice].classList.remove('slide-left');
    this.cartoes[this.indice].classList.add('slide-right');
  }

  confusoCard(card: Card, idPesoResposta: number) {
    this.flashCard.nativeElement.children[this.indice].remove();
    this.lista.splice(this.indice, 1);
    this.cartoes = Array.from(this.flashCard.nativeElement.children);
    const aux = this.indice;
    this.indice = aux === this.cartoes.length ? 0 : this.indice++;
    if (this.cartoes.length === 0) {
      this.existeCard = false;
    } else {
      this.cartoes[this.indice].style.display = 'flex';
      this.cartoes[this.indice].classList.remove('slide-left');
      this.cartoes[this.indice].classList.add('slide-right');
    }

    console.log(this.cartoes.length);
    if (this.cartoes.length === 1) {
      this.exigeBotaoNavegacao = false;
    }

    this.cardService.calculaProximaRevisaoCard(card.id, idPesoResposta).subscribe(() => {
    });
  }

  prev() {
    const aux = --this.indice;
    this.indice = aux === -1 ? this.cartoes.length - 1 : aux;
    this.cartoes[this.indice].classList.remove('slide-righ');
    this.cartoes[this.indice].classList.add('slide-left');
  }

  next() {
    const aux = ++this.indice;
    this.indice = aux === this.cartoes.length ? 0 : aux;
    this.cartoes[this.indice].classList.remove('slide-left');
    this.cartoes[this.indice].classList.add('slide-right');
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
