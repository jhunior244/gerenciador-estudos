package br.com.studymanager.mapeador;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",uses =
        {TipoEventoMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventoMapeador {

    EventoDto paraDto(Evento evento);

    Evento doDto(EventoDto evento);

}
