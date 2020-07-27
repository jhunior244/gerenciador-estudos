package br.com.studymanager.controlador;

import br.com.studymanager.config.security.TokenService;
import br.com.studymanager.dto.DiaCalendarioDto;
import br.com.studymanager.servico.DiaCalendarioServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("diaCalendario")
public class DiaCalendarioControlador {

    @Autowired
    private DiaCalendarioServico diaCalendarioServico;

    @Autowired
    private TokenService tokenService;

    @GetMapping(path = "/lista")
    public List<DiaCalendarioDto> lista(@RequestHeader(name="Authorization") String token, Long mes, Long ano){
        long idUsuario = tokenService.getIdUsuario(token.substring(7));
        return diaCalendarioServico.listaDiasMes(idUsuario, mes, ano);
    }
}
