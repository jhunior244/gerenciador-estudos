package br.com.studymanager.servico;

import br.com.studymanager.dto.DiaCalendarioDto;
import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.dto.TipoEventoDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@Transactional
public class DiaCalendarioServico implements IDiaCalendarioServico{

    @Override
    public List<DiaCalendarioDto> listaDiasMes(Long mes, Long ano) {

        ZonedDateTime primeiroDiaMes = ZonedDateTime.of(ano.intValue(), mes.intValue(), 1, 0,0,0,0, ZoneId.systemDefault());
        ZonedDateTime primeiroDiaCalendario = primeiroDiaMes.minusDays(primeiroDiaMes.getDayOfWeek().getValue());

        List<DiaCalendarioDto> lista = new ArrayList<>();

        for(int i = 0; i < 42; i++){
            DiaCalendarioDto dia = new DiaCalendarioDto();
            if(i == 0 ){
                EventoDto eventoDto = new EventoDto();
                eventoDto.setNome("Prova TDC");
                eventoDto.setDescricao("Prova TDC - imagine aqui uma descrição");
                TipoEventoDto tipoEvento = new TipoEventoDto();
                tipoEvento.setId(1L);
                tipoEvento.setNome("Prova");
                eventoDto.setTipoEvento(tipoEvento);
                dia.setListaEvento(Arrays.asList(eventoDto));
            }
            if(i == 18){
                EventoDto eventoDto = new EventoDto();
                eventoDto.setNome("Trabalho Marketing");
                eventoDto.setDescricao("Imagine aqui uma descrição");
                TipoEventoDto tipoEvento = new TipoEventoDto();
                tipoEvento.setId(2L);
                tipoEvento.setNome("Trabalho");
                eventoDto.setTipoEvento(tipoEvento);
                dia.setListaEvento(Arrays.asList(eventoDto, eventoDto, eventoDto,
                        eventoDto, eventoDto, eventoDto, eventoDto, eventoDto, eventoDto));
            }
            ZonedDateTime data = primeiroDiaCalendario.plusDays(i);
            dia.setData(data);
            lista.add(dia);
        }

        return lista;
    }
}
