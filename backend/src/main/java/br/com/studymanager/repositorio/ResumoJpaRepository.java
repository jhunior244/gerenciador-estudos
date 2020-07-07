package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.Resumo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ResumoJpaRepository extends JpaRepository<Resumo, Long>, ResumoJpaRepositoryCustom, PagingAndSortingRepository<Resumo, Long> {
}
