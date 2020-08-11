package br.com.studymanager.servico.cronograma;

import br.com.studymanager.dto.CronogramaDto;
import br.com.studymanager.entidade.Cronograma;

import java.util.List;

public interface ICronogramaServico {
    Cronograma cria(CronogramaDto dto, long idUsuario);

    Cronograma atualiza(CronogramaDto dto, long idUsuario);

    Cronograma obtem(Long id);
}
