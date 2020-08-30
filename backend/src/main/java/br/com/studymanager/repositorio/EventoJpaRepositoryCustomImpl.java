package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.QEvento;
import br.com.studymanager.entidade.Usuario;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import java.time.ZonedDateTime;
import java.util.List;

public class EventoJpaRepositoryCustomImpl implements EventoJpaRepositoryCustom {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Evento> lista(Usuario usuario, ZonedDateTime inicio, ZonedDateTime fim, Long[] listaIdCronograma){

        QEvento evento = QEvento.evento;

        JPQLQuery<Evento> query = jpaQueryFactory.selectFrom(evento);

        BooleanExpression predicado = evento.id.isNotNull();

        predicado = predicado.and(evento.data.eq(inicio).or(evento.data.after(inicio)
                                    .and(evento.data.before(fim.plusDays(1)))));

        if(!ObjectUtils.isEmpty(listaIdCronograma)){
            predicado = predicado.and(evento.cronograma.id.in(listaIdCronograma));
        }

        query.where(predicado);

        return query.fetch();
    }
}
