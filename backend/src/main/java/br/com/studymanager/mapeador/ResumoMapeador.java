package br.com.studymanager.mapeador;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.dto.ResumoDto;
import br.com.studymanager.entidade.Resumo;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {EventoMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ResumoMapeador {

    ResumoDto paraDto(Resumo evento);

    Resumo doDto(ResumoDto evento);

    List<Resumo> doDto(List<ResumoDto> lista);

    List<ResumoDto> paraDto(List<Resumo> lista);

    default Page<ResumoDto> kitToKitDto(Page<Resumo> page){
        return page.map(this::paraDto);
    }
}
