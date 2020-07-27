package br.com.studymanager.servico;

import br.com.studymanager.config.validacao.LancadorExcessao;
import br.com.studymanager.entidade.Usuario;
import br.com.studymanager.repositorio.UsuarioJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class UsuarioServico implements IUsuarioServico {

    @Autowired
    private UsuarioJpaRepository usuarioJpaRepository;

    @Override
    public boolean existeUsuarioCadastradoComEmail(String email){
        Usuario usuario = usuarioJpaRepository.findByEmail(email);

        return usuario != null ? true : false;
    }

    @Override
    public Usuario cria(Usuario usuario) throws LancadorExcessao {
        Usuario usuarioBanco = usuarioJpaRepository.findByEmail(usuario.getEmail());
        if (usuarioBanco != null){
            throw new LancadorExcessao("Email já existe");
        }
        usuario.setSenha(new BCryptPasswordEncoder().encode(usuario.getSenha()));
        usuario = usuarioJpaRepository.save(usuario);
        return usuario;
    }


}
