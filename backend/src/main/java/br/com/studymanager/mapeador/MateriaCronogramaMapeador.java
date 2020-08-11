package br.com.studymanager.mapeador;

import br.com.studymanager.dto.MateriaCronogramaDto;
import br.com.studymanager.entidade.MateriaCronograma;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {
                TopicoMateriaCronogramaMapeador.class,
                MateriaMapeador.class,
                CronogramaMapeador.class
        },
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MateriaCronogramaMapeador {

    @Mapping(target = "cronograma", ignore = true)
    MateriaCronogramaDto paraDto(MateriaCronograma entidade);

    MateriaCronograma doDto(MateriaCronogramaDto dto);

    List<MateriaCronograma> doDto(List<MateriaCronogramaDto> lista);

    List<MateriaCronogramaDto> paraDto(List<MateriaCronograma> lista);

    default Page<MateriaCronogramaDto> paraDto(Page<MateriaCronograma> page){
        return page.map(this::paraDto);
    }
}
