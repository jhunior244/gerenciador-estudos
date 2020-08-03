package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Materia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MateriaJpaRepository extends JpaRepository<Materia, Long>, PagingAndSortingRepository<Materia, Long> {
}
