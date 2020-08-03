package br.com.studymanager.servico;

import br.com.studymanager.entidade.Materia;
import br.com.studymanager.repositorio.MateriaJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class MateriaServico implements IMateriaServico {

    @Autowired
    private MateriaJpaRepository materiaJpaRepository;

    @Override
    public List<Materia> lista() {
        return materiaJpaRepository.findAll();
    }
}
