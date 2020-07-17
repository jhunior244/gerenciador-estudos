package br.com.studymanager.repositorio.card;

import br.com.studymanager.entidade.Card;
import br.com.studymanager.entidade.Evento;

import java.time.ZonedDateTime;
import java.util.List;

public interface CardJpaRepositoryCustom {
    List<Card> lista(Long idEvento, ZonedDateTime dataLimite);
}
