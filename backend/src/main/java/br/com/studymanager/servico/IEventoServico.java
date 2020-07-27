package br.com.studymanager.servico;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;

public interface IEventoServico {

    Evento cria(EventoDto eventoDto, long idUsuario);

    Evento obtem(Long id);

    Evento atualiza(EventoDto evento);
}
