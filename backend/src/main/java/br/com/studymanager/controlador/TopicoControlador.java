package br.com.studymanager.controlador;

import br.com.studymanager.config.security.TokenService;
import br.com.studymanager.dto.TopicoDto;
import br.com.studymanager.mapeador.TopicoMapeador;
import br.com.studymanager.servico.ITopicoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("topico")
public class TopicoControlador {

    @Autowired
    private ITopicoServico topicoServico;

    @Autowired
    private TopicoMapeador topicoMapeador;

    @Autowired
    private TokenService tokenService;

    @PostMapping(path = "/cria")
    public TopicoDto cria(@RequestHeader(name="Authorization") String token, @RequestBody TopicoDto topico) throws Exception {
//        long idUsuario = tokenService.getIdUsuario(token.substring(7));

        return topicoMapeador.paraDto(topicoServico.cria(topicoMapeador.doDto(topico)));
    }

    @PutMapping(path = "/atualiza")
    public TopicoDto atualiza(@RequestBody TopicoDto topico) throws Exception {

        return topicoMapeador.paraDto(topicoServico.cria(topicoMapeador.doDto(topico)));
    }

    @GetMapping(path = "/lista")
    public List<TopicoDto> lista(@RequestHeader(name="Authorization") String token, Long id){
//        long idUsuario = tokenService.getIdUsuario(token.substring(7));
        return topicoMapeador.paraDto(topicoServico.lista(id));
    }
}
