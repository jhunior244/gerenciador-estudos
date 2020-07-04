package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoJpaRepository extends JpaRepository<Evento, Long> {
}
