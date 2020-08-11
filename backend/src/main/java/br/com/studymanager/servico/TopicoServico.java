package br.com.studymanager.servico;

import br.com.studymanager.entidade.Topico;
import br.com.studymanager.mapeador.TopicoMapeador;
import br.com.studymanager.repositorio.cronograma.TopicoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class TopicoServico implements ITopicoServico {

    @Autowired
    private TopicoJpaRepository topicoJpaRepository;

    @Autowired
    private TopicoMapeador topicoMapeador;

    @Override
    public Topico cria(Topico topico) {
        return topicoJpaRepository.save(topico);
    }

    @Override
    public List<Topico> lista(Long idMateria) {
        return topicoJpaRepository.listaPorMateria(idMateria);
    }
}
