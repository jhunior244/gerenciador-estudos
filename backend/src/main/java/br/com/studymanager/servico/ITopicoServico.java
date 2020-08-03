package br.com.studymanager.servico;

import br.com.studymanager.dto.MateriaDto;
import br.com.studymanager.entidade.Topico;

import java.util.List;

public interface ITopicoServico {

    Topico cria(Topico topico);

    List<Topico> lista(Long idMateria);
}
