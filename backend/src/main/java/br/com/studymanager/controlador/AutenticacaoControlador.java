package br.com.studymanager.controlador;

import br.com.studymanager.config.security.TokenService;
import br.com.studymanager.config.validacao.LancadorExcessao;
import br.com.studymanager.dto.UsuarioDto;
import br.com.studymanager.dto.UsuarioSaidaDto;
import br.com.studymanager.entidade.Usuario;
import br.com.studymanager.repositorio.UsuarioJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("auth")
public class AutenticacaoControlador {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioJpaRepository usuarioJpaRepository;

    @PostMapping(path = "/login")
    public ResponseEntity<UsuarioSaidaDto> logar(@RequestBody UsuarioDto usuario) throws LancadorExcessao{
        UsernamePasswordAuthenticationToken dadosLogin = usuario.converter();

        try {
            Authentication authentication = authenticationManager.authenticate(dadosLogin);
            String token = tokenService.gerarToken(authentication);
            Usuario usuarioLogado = usuarioJpaRepository.findByEmail(usuario.getEmail());
            UsuarioSaidaDto usuarioSaidaDto = new UsuarioSaidaDto();
            usuarioSaidaDto.setNome(((Usuario) usuarioLogado).getNome());
            usuario.setEmail(usuarioLogado.getEmail());
            usuarioSaidaDto.setToken("Bearer " + token);
            usuarioLogado.setToken("Bearer " + token);
            usuarioJpaRepository.save(usuarioLogado);
            return ResponseEntity.ok(usuarioSaidaDto);
        } catch (AuthenticationException e){
            throw new LancadorExcessao("Dados inválidos");
        }
    }
}
