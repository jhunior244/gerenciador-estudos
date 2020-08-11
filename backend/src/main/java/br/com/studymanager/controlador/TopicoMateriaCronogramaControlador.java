package br.com.studymanager.controlador;

import br.com.studymanager.config.security.TokenService;
import br.com.studymanager.dto.TopicoDto;
import br.com.studymanager.dto.TopicoMateriaCronogramaDto;
import br.com.studymanager.mapeador.TopicoMateriaCronogramaMapeador;
import br.com.studymanager.servico.cronograma.ITopicoMateriaCronogramaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("topicoMateriaCronograma")
public class TopicoMateriaCronogramaControlador {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private TopicoMateriaCronogramaMapeador topicoMateriaCronogramaMapeador;

    @Autowired
    private ITopicoMateriaCronogramaService topicoMateriaCronogramaService;

    @PostMapping(path = "/cria")
    public TopicoMateriaCronogramaDto cria(@RequestHeader(name="Authorization") String token, @RequestBody TopicoMateriaCronogramaDto dto) throws Exception {
//        long idUsuario = tokenService.getIdUsuario(token.substring(7));

        return topicoMateriaCronogramaMapeador.paraDto(topicoMateriaCronogramaService.cria(topicoMateriaCronogramaMapeador.doDto(dto)));
    }

    @PutMapping(path = "/atualiza")
    public TopicoMateriaCronogramaDto atualiza(@RequestBody TopicoMateriaCronogramaDto dto) throws Exception {

        return topicoMateriaCronogramaMapeador.paraDto(topicoMateriaCronogramaService.atualiza(topicoMateriaCronogramaMapeador.doDto(dto)));
    }

}
