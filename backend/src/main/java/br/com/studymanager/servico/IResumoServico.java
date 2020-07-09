package br.com.studymanager.servico;

import br.com.studymanager.dto.ResumoDto;
import br.com.studymanager.entidade.Resumo;

import java.util.List;

public interface IResumoServico {

    ResumoDto cria(ResumoDto resumoDto);

    List<ResumoDto> lista(Long id);

    Resumo obtem(Long id);
}
