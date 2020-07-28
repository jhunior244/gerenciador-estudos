package br.com.studymanager.mapeador;

import br.com.studymanager.dto.MateriaDto;
import br.com.studymanager.dto.TopicoDto;
import br.com.studymanager.entidade.Materia;
import br.com.studymanager.entidade.Topico;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses =
        {MateriaMapeador.class},
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TopicoMapeador {

    TopicoDto paraDto(Topico obj);

    Topico doDto(MateriaDto obj);

    List<Topico> doDto(List<TopicoDto> lista);

    List<TopicoDto> paraDto(List<Topico> lista);

    default Page<TopicoDto> paraDto(Page<Topico> page){
        return page.map(this::paraDto);
    }
}
