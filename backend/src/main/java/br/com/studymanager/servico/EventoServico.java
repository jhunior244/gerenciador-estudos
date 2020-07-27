package br.com.studymanager.servico;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;
import br.com.studymanager.entidade.Usuario;
import br.com.studymanager.mapeador.EventoMapeador;
import br.com.studymanager.repositorio.EventoJpaRepository;
import br.com.studymanager.repositorio.UsuarioJpaRepository;
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

    @Autowired
    private UsuarioJpaRepository usuarioJpaRepository;


    @Override
    public Evento cria(EventoDto eventoDto, long idUsuario) {
        Usuario usuario = usuarioJpaRepository.getOne(idUsuario);
        Evento evento = eventoMapeador.doDto(eventoDto);
        evento.setUsuario(usuario);
        evento.setData(eventoDto.getData().withZoneSameInstant(ZoneOffset.UTC).truncatedTo(ChronoUnit.DAYS));
        return eventoJpaRepository.save(evento);
    }

    @Override
    public Evento obtem(Long id) {
        return eventoJpaRepository.findById(id).get();
    }

    @Override
    public Evento atualiza(EventoDto evento) {
        return eventoJpaRepository.save(eventoMapeador.doDto(evento));
    }
}
