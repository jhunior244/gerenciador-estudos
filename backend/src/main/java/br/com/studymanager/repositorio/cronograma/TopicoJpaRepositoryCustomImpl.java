package br.com.studymanager.repositorio.cronograma;

import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.QEvento;
import br.com.studymanager.entidade.QTopico;
import br.com.studymanager.entidade.Topico;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TopicoJpaRepositoryCustomImpl implements TopicoJpaRepositoryCustom {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Topico> listaPorMateria(long idMateria) {
        QTopico topico = QTopico.topico;

        JPQLQuery<Topico> query = jpaQueryFactory.selectFrom(topico);

        BooleanExpression predicado = topico.id.isNotNull();

        predicado = predicado.and(topico.listaMateria.any().id.eq(idMateria));

        query.where(predicado);

        return query.fetch();
    }
}
