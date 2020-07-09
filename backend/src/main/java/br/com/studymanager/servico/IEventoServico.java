package br.com.studymanager.servico;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;

import java.util.List;

public interface IEventoServico {

    Evento cria(EventoDto eventoDto);

    Evento obtem(Long id);
}
