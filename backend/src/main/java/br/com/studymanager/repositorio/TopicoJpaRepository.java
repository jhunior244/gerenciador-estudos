package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Topico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TopicoJpaRepository extends JpaRepository<Topico, Long>, PagingAndSortingRepository<Topico, Long> {
    List<Topico> findAllByMateriaId(Long idMateria);
}
