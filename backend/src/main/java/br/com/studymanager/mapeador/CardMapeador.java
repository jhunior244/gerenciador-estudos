package br.com.studymanager.mapeador;

import br.com.studymanager.dto.CardDto;
import br.com.studymanager.entidade.Card;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {EventoMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CardMapeador {
    CardDto paraDto(Card obj);

    Card doDto(CardDto obj);

    List<Card> doDto(List<CardDto> lista);

    List<CardDto> paraDto(List<Card> lista);

    default Page<CardDto> kitToKitDto(Page<Card> page){
        return page.map(this::paraDto);
    }
}
