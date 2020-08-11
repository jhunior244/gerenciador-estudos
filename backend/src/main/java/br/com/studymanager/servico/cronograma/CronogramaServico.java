package br.com.studymanager.servico.cronograma;

import br.com.studymanager.dto.CronogramaDto;
import br.com.studymanager.entidade.Cronograma;
import br.com.studymanager.entidade.MateriaCronograma;
import br.com.studymanager.entidade.TopicoMateriaCronograma;
import br.com.studymanager.entidade.Usuario;
import br.com.studymanager.mapeador.CronogramaMapeador;
import br.com.studymanager.repositorio.UsuarioJpaRepository;
import br.com.studymanager.repositorio.cronograma.CronogramaJpaRepository;
import br.com.studymanager.repositorio.cronograma.MateriaCronogramaJpaRepository;
import br.com.studymanager.repositorio.cronograma.TopicoMateriaCronogramaJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CronogramaServico implements ICronogramaServico {

    @Autowired
    private CronogramaJpaRepository cronogramaJpaRepository;

    @Autowired
    private MateriaCronogramaJpaRepository materiaCronogramaJpaRepository;

    @Autowired
    private UsuarioJpaRepository usuarioJpaRepository;

    @Autowired
    private CronogramaMapeador cronogramaMapeador;

    @Autowired
    private TopicoMateriaCronogramaJpaRepository topicoMateriaCronogramaJpaRepository;

    @Override
    public Cronograma cria(CronogramaDto dto, long idUsuario) {

        return cronogramaJpaRepository.save(cronogramaMapeador.doDto(dto));
    }

    @Override
    public Cronograma atualiza(CronogramaDto dto, long idUsuario) {
        Usuario usuario = usuarioJpaRepository.findById(idUsuario).get();
        Cronograma cronograma = cronogramaMapeador.doDto(dto);

        if(CollectionUtils.isEmpty(cronograma.getListaMateriaCronograma())){
            cronograma.setListaMateriaCronograma(new ArrayList<>());
        }

        for(MateriaCronograma mc : cronograma.getListaMateriaCronograma()){

            mc.setCronograma(cronograma);
            materiaCronogramaJpaRepository.save(mc);
            if(!CollectionUtils.isEmpty(mc.getListaTopicoMateriaCronograma())){
               for(TopicoMateriaCronograma topicoMateria : mc.getListaTopicoMateriaCronograma()){
                   if(ObjectUtils.isEmpty(topicoMateria)){
                       continue;
                   }

                   topicoMateria.setMateriaCronograma(mc);
                   topicoMateriaCronogramaJpaRepository.save(topicoMateria);
               }
            }
        }
        cronograma.setUsuario(usuario);
        return cronogramaJpaRepository.save(cronograma);
    }

    @Override
    public Cronograma obtem(Long id) {
        return cronogramaJpaRepository.findById(id).get();
    }
}
