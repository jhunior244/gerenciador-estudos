package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Data
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column
    private String descricao;

    @Column(nullable = false)
    private ZonedDateTime data;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private TipoEvento tipoEvento;
}
