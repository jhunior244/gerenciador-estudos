package br.com.studymanager.servico;

import br.com.studymanager.entidade.Usuario;

public interface IUsuarioServico {

    boolean existeUsuarioCadastradoComEmail(String email);

    Usuario cria(Usuario usuario) throws Exception;
}
