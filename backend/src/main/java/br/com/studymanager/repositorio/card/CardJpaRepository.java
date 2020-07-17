package br.com.studymanager.repositorio.card;

import br.com.studymanager.entidade.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CardJpaRepository extends JpaRepository<Card, Long>,
        CardJpaRepositoryCustom, PagingAndSortingRepository<Card, Long> {
    Card findByEventoId(Long id);

    List<Card> findAllByEventoId(Long id);
}
