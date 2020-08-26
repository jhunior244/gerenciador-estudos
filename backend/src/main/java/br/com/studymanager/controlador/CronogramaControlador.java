package br.com.studymanager.controlador;

import br.com.studymanager.config.security.TokenService;
import br.com.studymanager.dto.CronogramaDto;
import br.com.studymanager.dto.DiaCalendarioDto;
import br.com.studymanager.mapeador.CronogramaMapeador;
import br.com.studymanager.servico.cronograma.ICronogramaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("cronograma")
public class CronogramaControlador {

    @Autowired
    private ICronogramaServico cronogramaServico;

    @Autowired
    private CronogramaMapeador cronogramaMapeador;

    @Autowired
    private TokenService tokenService;

    @PostMapping(path = "/cria")
    public CronogramaDto cria(@RequestHeader(name="Authorization") String token, @RequestBody CronogramaDto dto) throws Exception {
        long idUsuario = tokenService.getIdUsuario(token.substring(7));

        return cronogramaMapeador.paraDto(cronogramaServico.cria(dto, idUsuario));
    }

    @PutMapping(path = "/atualiza")
    public CronogramaDto atualiza(@RequestHeader(name="Authorization") String token, @RequestBody CronogramaDto dto) throws Exception {
        long idUsuario = tokenService.getIdUsuario(token.substring(7));
        return cronogramaMapeador.paraDto(cronogramaServico.atualiza(dto, idUsuario));
    }

    @GetMapping(path = "/obtem")
    public CronogramaDto obtem(Long id){

        return cronogramaMapeador.paraDto(cronogramaServico.obtem(id));
    }

    @GetMapping(path = "/lista")
    public List<CronogramaDto> lista(@RequestHeader(name="Authorization") String token, Long mes, Long ano){
        long idUsuario = tokenService.getIdUsuario(token.substring(7));
        return cronogramaMapeador.paraDto(cronogramaServico.listaPorUsuario(idUsuario));
    }
}
