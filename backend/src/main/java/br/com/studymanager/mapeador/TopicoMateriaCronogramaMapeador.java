package br.com.studymanager.mapeador;

import br.com.studymanager.dto.TopicoMateriaCronogramaDto;
import br.com.studymanager.entidade.TopicoMateriaCronograma;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {MateriaCronogramaMapeador.class,
        TopicoMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TopicoMateriaCronogramaMapeador {

    @Mapping(target = "materiaCronograma", ignore = true)
    TopicoMateriaCronogramaDto paraDto(TopicoMateriaCronograma entidade);

    TopicoMateriaCronograma doDto(TopicoMateriaCronogramaDto dto);

    List<TopicoMateriaCronograma> doDto(List<TopicoMateriaCronogramaDto> lista);

    List<TopicoMateriaCronogramaDto> paraDto(List<TopicoMateriaCronograma> lista);

    default Page<TopicoMateriaCronogramaDto> paraDto(Page<TopicoMateriaCronograma> page){
        return page.map(this::paraDto);
    }
}
