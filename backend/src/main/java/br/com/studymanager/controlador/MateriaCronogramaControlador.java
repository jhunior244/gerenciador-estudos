package br.com.studymanager.controlador;

import br.com.studymanager.dto.MateriaDto;
import br.com.studymanager.servico.cronograma.MateriaCronogramaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("materiaCronograma")
public class MateriaCronogramaControlador {

    @Autowired
    private MateriaCronogramaServico materiaCronogramaServico;


    @DeleteMapping(path = "/apaga")
    public void lista(Long id){
//        long idUsuario = tokenService.getIdUsuario(token.substring(7));
        materiaCronogramaServico.apaga(id);
    }
}
