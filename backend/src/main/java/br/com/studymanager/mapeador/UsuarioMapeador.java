package br.com.studymanager.mapeador;

import br.com.studymanager.dto.UsuarioDto;
import br.com.studymanager.dto.UsuarioSaidaDto;
import br.com.studymanager.entidade.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UsuarioMapeador {

    UsuarioSaidaDto paraDto(Usuario usuario);

    Usuario doDto(UsuarioDto usuario);
}
