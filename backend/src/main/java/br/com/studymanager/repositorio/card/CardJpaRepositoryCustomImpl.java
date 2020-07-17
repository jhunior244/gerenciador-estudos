package br.com.studymanager.repositorio.card;

import br.com.studymanager.entidade.Card;
import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.QCard;
import br.com.studymanager.entidade.QEvento;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;

import java.time.ZonedDateTime;
import java.util.List;

public class CardJpaRepositoryCustomImpl implements CardJpaRepositoryCustom {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Card> lista(Long idEvento, ZonedDateTime dataLimite) {

        QCard card = QCard.card;

        JPQLQuery<Card> query = jpaQueryFactory.selectFrom(card);

        BooleanExpression predicado = card.id.isNotNull();

        if(!ObjectUtils.isEmpty(idEvento)){
            predicado = predicado.and(card.evento.id.eq(idEvento));
        }

        predicado = predicado.and(card.dataProximaRevisao.eq(dataLimite)
                .or(card.dataProximaRevisao.before(dataLimite)
                        .or(card.evento.data.eq(dataLimite))
                        .or(card.evento.data.eq(dataLimite.plusDays(1)))
        ));

        query.where(predicado);

        return query.fetch();
    }
}
