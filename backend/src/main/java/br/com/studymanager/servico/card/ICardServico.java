package br.com.studymanager.servico.card;

import br.com.studymanager.dto.CardDto;
import br.com.studymanager.entidade.Card;

import java.util.List;

public interface ICardServico {

    Card cria(CardDto obj);

    Card obtem(Long id);

    Card atualiza(CardDto obj);

    List<CardDto> lista(Long id);
}
