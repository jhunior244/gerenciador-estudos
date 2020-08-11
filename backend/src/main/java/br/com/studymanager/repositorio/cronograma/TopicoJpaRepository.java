package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Topico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TopicoJpaRepository extends JpaRepository<Topico, Long>, TopicoJpaRepositoryCustom, PagingAndSortingRepository<Topico, Long>  {

}
