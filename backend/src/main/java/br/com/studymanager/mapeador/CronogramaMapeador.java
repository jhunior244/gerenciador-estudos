package br.com.studymanager.mapeador;

import br.com.studymanager.dto.CronogramaDto;
import br.com.studymanager.entidade.Cronograma;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {MateriaCronogramaMapeador.class,
        UsuarioMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CronogramaMapeador {

    CronogramaDto paraDto(Cronograma obj);

    Cronograma doDto(CronogramaDto obj);

    List<Cronograma> doDto(List<CronogramaDto> lista);

    List<CronogramaDto> paraDto(List<Cronograma> lista);

    default Page<CronogramaDto> paraDto(Page<Cronograma> page){
        return page.map(this::paraDto);
    }
}
