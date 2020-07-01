package br.com.studymanager.repositorio;

import br.com.studymanager.entidade.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioJpaRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
    Usuario findByToken(String token);
}
