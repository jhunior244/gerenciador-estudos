package br.com.studymanager.controlador;

import br.com.studymanager.dto.UsuarioDto;
import br.com.studymanager.mapeador.UsuarioMapeador;
import br.com.studymanager.servico.UsuarioServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("usuario")
public class UsuarioControlador {

    @Autowired
    private UsuarioServico usuarioServico;

    @Autowired
    private UsuarioMapeador usuarioMapeador;

    @GetMapping(path = "existeUsuarioCadastradoComEmail")
    public boolean existeUsuarioCadastradoComEmail(String email){
        return usuarioServico.existeUsuarioCadastradoComEmail(email);
    }

    @PostMapping(path = "/cria")
    public void cria(@RequestBody UsuarioDto usuarioDto) throws Exception {
        usuarioServico.cria(usuarioMapeador.doDto(usuarioDto));
    }
}
