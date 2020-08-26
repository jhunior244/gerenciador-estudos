package br.com.studymanager.servico.cronograma;

import br.com.studymanager.entidade.MateriaCronograma;
import br.com.studymanager.repositorio.cronograma.MateriaCronogramaJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class MateriaCronogramaServico implements IMateriaCronogramaServico {

    @Autowired
    private MateriaCronogramaJpaRepository materiaCronogramaJpaRepository;

    @Override
    public void apaga(Long id){
        MateriaCronograma materiaCronograma = materiaCronogramaJpaRepository.findById(id).get();

        materiaCronogramaJpaRepository.delete(materiaCronograma);
    }
}
