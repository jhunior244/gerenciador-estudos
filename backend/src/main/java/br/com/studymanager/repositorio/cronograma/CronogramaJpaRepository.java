package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Cronograma;
import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CronogramaJpaRepository extends JpaRepository<Cronograma, Long>, CronogramaJpaRepositoryCustom, PagingAndSortingRepository<Cronograma, Long> {
    List<Cronograma> findAllByUsuario(Usuario usuario);
}
