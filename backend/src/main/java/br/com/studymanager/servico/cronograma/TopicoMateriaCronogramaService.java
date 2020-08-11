package br.com.studymanager.servico.cronograma;

import br.com.studymanager.entidade.TopicoMateriaCronograma;
import br.com.studymanager.repositorio.cronograma.TopicoMateriaCronogramaJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class TopicoMateriaCronogramaService implements ITopicoMateriaCronogramaService {

    @Autowired
    private TopicoMateriaCronogramaJpaRepository topicoMateriaCronogramaJpaRepository;

    public TopicoMateriaCronograma cria(TopicoMateriaCronograma entidade){
       return topicoMateriaCronogramaJpaRepository.save(entidade);
    }

    @Override
    public TopicoMateriaCronograma atualiza(TopicoMateriaCronograma entidade) {
        return topicoMateriaCronogramaJpaRepository.save(entidade);
    }
}
