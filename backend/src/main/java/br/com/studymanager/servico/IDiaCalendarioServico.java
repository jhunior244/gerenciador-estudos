package br.com.studymanager.servico;

import br.com.studymanager.dto.DiaCalendarioDto;

import java.util.List;

public interface IDiaCalendarioServico {

    List<DiaCalendarioDto> listaDiasMes(long idUsuario, Long mes, Long ano, Long[] listaIdCronograma);
}
