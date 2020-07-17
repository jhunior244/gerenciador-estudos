package br.com.studymanager.servico.card;

import br.com.studymanager.dto.CardDto;
import br.com.studymanager.entidade.Card;
import br.com.studymanager.mapeador.CardMapeador;
import br.com.studymanager.repositorio.card.CardJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@Transactional
public class CardServico implements ICardServico {

    @Autowired
    private CardJpaRepository cardJpaRepository;

    @Autowired
    private CardMapeador cardMapeador;

    @Override
    public Card cria(CardDto obj) {
        Card card = cardMapeador.doDto(obj);
        card.setDataProximaRevisao(ZonedDateTime.now().withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS));
        return cardJpaRepository.save(card);
    }

    @Override
    public Card obtem(Long id) {
        return cardJpaRepository.findById(id).get();
    }

    @Override
    public Card atualiza(CardDto obj) {
        return cardJpaRepository.save(cardMapeador.doDto(obj));
    }

    @Override
    public List<CardDto> lista(Long id) {
        ZonedDateTime dataLimite = ZonedDateTime.now().withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS);
        return cardMapeador.paraDto(cardJpaRepository.lista(id, dataLimite));
    }
}
