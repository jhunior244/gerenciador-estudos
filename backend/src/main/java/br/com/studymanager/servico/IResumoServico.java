package br.com.studymanager.servico;

import br.com.studymanager.dto.DiaCalendarioDto;
import br.com.studymanager.dto.ResumoDto;

import java.util.List;

public interface IResumoServico {

    ResumoDto cria(ResumoDto resumoDto);

    List<ResumoDto> lista();
}
