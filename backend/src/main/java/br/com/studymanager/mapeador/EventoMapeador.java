package br.com.studymanager.mapeador;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {TipoEventoMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventoMapeador {

    EventoDto paraDto(Evento evento);

    Evento doDto(EventoDto evento);

    List<Evento> doDto(List<EventoDto> lista);

    List<EventoDto> paraDto(List<Evento> lista);

    default Page<EventoDto> paraDto(Page<Evento> page){
        return page.map(this::paraDto);
    }

}
