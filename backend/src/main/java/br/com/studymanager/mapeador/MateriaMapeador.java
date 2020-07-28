package br.com.studymanager.mapeador;

import br.com.studymanager.dto.MateriaDto;
import br.com.studymanager.entidade.Materia;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {CronogramaMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MateriaMapeador {

    MateriaDto paraDto(Materia obj);

    Materia doDto(MateriaDto obj);

    List<Materia> doDto(List<MateriaDto> lista);

    List<MateriaDto> paraDto(List<Materia> lista);

    default Page<MateriaDto> paraDto(Page<Materia> page){
        return page.map(this::paraDto);
    }
}
