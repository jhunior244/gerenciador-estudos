package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.MateriaCronograma;
import br.com.studymanager.repositorio.EventoJpaRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MateriaCronogramaJpaRepository extends JpaRepository<MateriaCronograma, Long>, EventoJpaRepositoryCustom, PagingAndSortingRepository<MateriaCronograma, Long> {
}
