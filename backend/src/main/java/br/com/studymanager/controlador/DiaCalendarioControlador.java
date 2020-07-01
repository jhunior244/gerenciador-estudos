package br.com.studymanager.controlador;

import br.com.studymanager.dto.DiaCalendarioDto;
import br.com.studymanager.servico.DiaCalendarioServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("diaCalendario")
public class DiaCalendarioControlador {

    @Autowired
    private DiaCalendarioServico diaCalendarioServico;

    @GetMapping(path = "/lista")
    public List<DiaCalendarioDto> lista(Long mes, Long ano){

        return diaCalendarioServico.listaDiasMes(mes, ano);
    }
}
