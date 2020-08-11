package br.com.studymanager.mapeador;

import br.com.studymanager.dto.TopicoDto;
import br.com.studymanager.entidade.Topico;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {MateriaMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TopicoMapeador {

    @Mapping(target = "materia", ignore = true)
    TopicoDto paraDto(Topico obj);

    Topico doDto(TopicoDto obj);

    List<Topico> doDto(List<TopicoDto> lista);

    List<TopicoDto> paraDto(List<Topico> lista);

    default Page<TopicoDto> paraDto(Page<Topico> page){
        return page.map(this::paraDto);
    }
}
