package br.com.studymanager.servico.cronograma;

import br.com.studymanager.dto.TopicoMateriaCronogramaDto;
import br.com.studymanager.entidade.TopicoMateriaCronograma;

public interface ITopicoMateriaCronogramaService {
    TopicoMateriaCronograma cria(TopicoMateriaCronograma entidade);

    TopicoMateriaCronograma atualiza(TopicoMateriaCronograma entidade);
}
