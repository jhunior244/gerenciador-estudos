package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Resumo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ResumoJpaRepository extends JpaRepository<Resumo, Long>, ResumoJpaRepositoryCustom, PagingAndSortingRepository<Resumo, Long> {
    List<Resumo> findAllByEvento_id(Long id);
}
