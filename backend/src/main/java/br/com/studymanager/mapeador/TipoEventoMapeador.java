package br.com.studymanager.mapeador;

import br.com.studymanager.dto.TipoEventoDto;
import br.com.studymanager.entidade.TipoEvento;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",uses = {
        EventoMapeador.class
}, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TipoEventoMapeador {

    TipoEventoDto paraDto(TipoEvento tipoEvento);

    TipoEvento doDto(TipoEventoDto tipoEventoDto);
}
