package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Cronograma;
import br.com.studymanager.entidade.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CronogramaJpaRepository extends JpaRepository<Cronograma, Long>, CronogramaJpaRepositoryCustom, PagingAndSortingRepository<Cronograma, Long> {
}
