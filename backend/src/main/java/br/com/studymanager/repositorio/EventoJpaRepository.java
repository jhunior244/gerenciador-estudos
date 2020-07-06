package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface EventoJpaRepository extends JpaRepository<Evento, Long>, EventoJpaRepositoryCustom, PagingAndSortingRepository<Evento, Long> {
}
