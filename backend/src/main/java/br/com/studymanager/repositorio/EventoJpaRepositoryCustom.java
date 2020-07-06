package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Evento;

import java.time.ZonedDateTime;
import java.util.List;

public interface EventoJpaRepositoryCustom {
    List<Evento> lista(ZonedDateTime inicio, ZonedDateTime fim);
}
