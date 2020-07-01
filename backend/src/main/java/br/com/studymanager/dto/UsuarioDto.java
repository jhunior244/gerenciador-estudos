package br.com.studymanager.dto;

import lombok.Data;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.io.Serializable;

@Data
public class UsuarioDto implements Serializable {

    private String nome;

    private String email;

    private String senha;

    private String token;

    public UsernamePasswordAuthenticationToken converter() {
        return new UsernamePasswordAuthenticationToken(email, senha);
    }
}
