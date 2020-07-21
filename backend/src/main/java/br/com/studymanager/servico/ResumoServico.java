package br.com.studymanager.servico;

import br.com.studymanager.dto.ResumoDto;
import br.com.studymanager.entidade.Resumo;
import br.com.studymanager.mapeador.ResumoMapeador;
import br.com.studymanager.repositorio.ResumoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.transaction.Transactional;
import java.time.ZonedDateTime;
import java.util.List;

@Service
@Transactional
public class ResumoServico implements IResumoServico {

    @Autowired
    private ResumoJpaRepository resumoJpaRepository;

    @Autowired
    private ResumoMapeador resumoMapeador;

    @Override
    public ResumoDto cria(ResumoDto resumoDto) {
        Resumo resumo = resumoMapeador.doDto(resumoDto);
        resumo.setDataCriacao(ZonedDateTime.now());
        resumo.setDataUltimaAtualizacao(ZonedDateTime.now());
        return resumoMapeador.paraDto(resumoJpaRepository.save(resumo));
    }

    @Override
    public List<ResumoDto> lista(Long id) {
        return resumoMapeador.paraDto(resumoJpaRepository.findAllByEvento_id(id));
    }

    @Override
    public Resumo obtem(Long id) {
        if(ObjectUtils.isEmpty(id)){
            return null;
        }
        return resumoJpaRepository.findById(id).get();
    }

}
