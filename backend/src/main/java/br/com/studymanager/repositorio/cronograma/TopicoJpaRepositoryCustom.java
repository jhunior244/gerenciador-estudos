package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Topico;

import java.util.List;

public interface TopicoJpaRepositoryCustom {

    List<Topico> listaPorMateria(long idMateria);
}
