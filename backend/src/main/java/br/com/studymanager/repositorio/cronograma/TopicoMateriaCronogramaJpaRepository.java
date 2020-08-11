package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.TopicoMateriaCronograma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TopicoMateriaCronogramaJpaRepository extends JpaRepository<TopicoMateriaCronograma, Long>,
        TopicoJpaRepositoryCustom, PagingAndSortingRepository<TopicoMateriaCronograma, Long> {
}
