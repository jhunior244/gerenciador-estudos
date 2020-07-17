package br.com.studymanager.controlador;

import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Evento;
import br.com.studymanager.mapeador.EventoMapeador;
import br.com.studymanager.servico.IEventoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("evento")
public class EventoControlador {

    @Autowired
    private IEventoServico eventoServico;

    @Autowired
    private EventoMapeador eventoMapeador;

    @PostMapping(path = "/cria")
    public EventoDto cria(@RequestBody EventoDto evento) throws Exception {
        Evento evento1 = eventoServico.cria(evento);
       return eventoMapeador.paraDto(evento1);
    }

    @PutMapping(path = "/atualiza")
    public EventoDto atualiza(@RequestBody EventoDto evento) throws Exception {
        Evento evento1 = eventoServico.atualiza(evento);
       return eventoMapeador.paraDto(evento1);
    }

    @GetMapping(path = "/obtem")
    public EventoDto obtem(Long id){

        return eventoMapeador.paraDto(eventoServico.obtem(id));
    }

}

