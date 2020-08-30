package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.Usuario;

import java.time.ZonedDateTime;
import java.util.List;

public interface EventoJpaRepositoryCustom {
    List<Evento> lista(Usuario usuario, ZonedDateTime inicio, ZonedDateTime fim, Long[] listaIdCronograma);
}
