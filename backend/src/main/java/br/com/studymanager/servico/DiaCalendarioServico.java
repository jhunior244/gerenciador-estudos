package br.com.studymanager.servico;

import br.com.studymanager.dto.DiaCalendarioDto;
import br.com.studymanager.dto.EventoDto;
import br.com.studymanager.entidade.Usuario;
import br.com.studymanager.mapeador.EventoMapeador;
import br.com.studymanager.repositorio.EventoJpaRepositoryCustom;
import br.com.studymanager.repositorio.UsuarioJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import javax.transaction.Transactional;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class DiaCalendarioServico implements IDiaCalendarioServico{

    @Autowired
    private EventoJpaRepositoryCustom eventoJpaRepository;

    @Autowired
    private EventoMapeador eventoMapeador;

    @Autowired
    private UsuarioJpaRepository usuarioJpaRepository;

    @Override
    public List<DiaCalendarioDto> listaDiasMes(long idUsuario, Long mes, Long ano) {

        Usuario usuario = usuarioJpaRepository.getOne(idUsuario);

        ZonedDateTime primeiroDiaMes = ZonedDateTime.of(ano.intValue(), mes.intValue(), 1,
                0,0,0,0, ZoneOffset.UTC);
        ZonedDateTime primeiroDiaCalendario = primeiroDiaMes.minusDays(primeiroDiaMes.getDayOfWeek().getValue() == 7 ?
                0 : primeiroDiaMes.getDayOfWeek().getValue());

        List<DiaCalendarioDto> listaDiaCalendario = new ArrayList<>();
        List<EventoDto> listaEvento =
                eventoMapeador.paraDto(eventoJpaRepository.lista(usuario, primeiroDiaCalendario, primeiroDiaCalendario.plusDays(41)));

        for(int i = 0; i < 42; i++){
            DiaCalendarioDto dia = new DiaCalendarioDto();

            ZonedDateTime data = primeiroDiaCalendario.plusDays(i);
            if(!CollectionUtils.isEmpty(listaEvento)){
                dia.setListaEvento(listaEventoPorDia(listaEvento, data));
            }

            dia.setData(data);
            listaDiaCalendario.add(dia);
        }

        return listaDiaCalendario;
    }

    private List<EventoDto> listaEventoPorDia(List<EventoDto> lista, ZonedDateTime dia){
        if(CollectionUtils.isEmpty(lista) || ObjectUtils.isEmpty(dia)){
            return null;
        }

        return lista.stream().filter(
                eventoDto -> eventoDto != null && eventoDto.getData().withZoneSameInstant(ZoneOffset.UTC).equals(dia)
        ).collect(Collectors.toList());
    }
}
