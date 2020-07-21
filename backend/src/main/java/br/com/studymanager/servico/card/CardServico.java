package br.com.studymanager.servico.card;

import br.com.studymanager.dto.CardDto;
import br.com.studymanager.entidade.Card;
import br.com.studymanager.entidade.PesoRespostaCard;
import br.com.studymanager.mapeador.CardMapeador;
import br.com.studymanager.repositorio.card.CardJpaRepository;
import br.com.studymanager.repositorio.card.PesoRespostaCardJpaRepository;
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

    @Autowired
    private PesoRespostaCardJpaRepository pesoRepository;

    @Override
    public Card cria(CardDto obj) {
        Card card = cardMapeador.doDto(obj);
        card.setDataProximaRevisao(ZonedDateTime.now().plusDays(1).withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS));
        card.setNumeroRevisaoFeita(0);
        card.setDiasRevisaoErrei(0);
        card.setDiasRevisaoConfuso(1);
        card.setDiasRevisaoFacil(2);
        card.setDiasRevisaoTranquilo(5);
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
        ZonedDateTime dataLimite = ZonedDateTime.now()
                .withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS);
        return cardMapeador.paraDto(cardJpaRepository.lista(id, dataLimite));
    }

    @Override
    public List<CardDto> listaTodosPorEvento(Long id) {
        return cardMapeador.paraDto(cardJpaRepository.findAllByEventoId(id));
    }

    @Override
    public void calculaProximaRevisaoCard(Long idCard, Long idPesoResposta) {
        Card card = cardJpaRepository.getOne(idCard);
        PesoRespostaCard peso = pesoRepository.getOne(idPesoResposta);

        card.setNumeroRevisaoFeita(card.getNumeroRevisaoFeita() + 1);

        if(peso.getId().equals(PesoRespostaCard.Valores.CONFUSO.obtemId())){
            card.setDataProximaRevisao(ZonedDateTime.now().plusDays(1));
        } else {
            int diasProximaRevisao = (int) (card.getNumeroRevisaoFeita() * peso.getPeso());
            card.setDataProximaRevisao(ZonedDateTime.now().plusDays(diasProximaRevisao));
        }
        card.setDiasRevisaoErrei(0);
        card.setDiasRevisaoConfuso(1);
        card.setDiasRevisaoFacil((int) ((card.getNumeroRevisaoFeita() + 1) * PesoRespostaCard.Valores.FACIL.obtemPeso()));
        card.setDiasRevisaoTranquilo((int) ((card.getNumeroRevisaoFeita() + 1) * PesoRespostaCard.Valores.TRANQUILO.obtemPeso()));
        card.setDataUltimaRevisao(ZonedDateTime.now().withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS));
    }
}
