package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.Usuario;

import java.time.ZonedDateTime;
import java.util.List;

public interface CronogramaJpaRepositoryCustom {
    List<Evento> lista(Usuario usuario, ZonedDateTime inicio, ZonedDateTime fim);
}
