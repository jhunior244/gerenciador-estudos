package br.com.studymanager.mapeador;

import br.com.studymanager.dto.TipoEventoDto;
import br.com.studymanager.entidade.TipoEvento;
import org.mapstruct.Mapper;

@Mapper
public interface TipoEventoMapeador {

    TipoEventoDto paraDto(TipoEvento tipoEvento);

    TipoEvento doDto(TipoEventoDto tipoEventoDto);
}
