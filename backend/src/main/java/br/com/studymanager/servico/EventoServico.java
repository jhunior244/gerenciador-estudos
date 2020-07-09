package br.com.studymanager.servico;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;
import br.com.studymanager.mapeador.EventoMapeador;
import br.com.studymanager.repositorio.EventoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;

@Service
@Transactional
public class EventoServico implements IEventoServico {

    @Autowired
    private EventoJpaRepository eventoJpaRepository;

    @Autowired
    private EventoMapeador eventoMapeador;


    @Override
    public Evento cria(EventoDto eventoDto) {
        eventoDto.setData(eventoDto.getData().withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS));
        return eventoJpaRepository.save(eventoMapeador.doDto(eventoDto));
    }

    @Override
    public Evento obtem(Long id) {
        return eventoJpaRepository.findById(id).get();
    }
}
