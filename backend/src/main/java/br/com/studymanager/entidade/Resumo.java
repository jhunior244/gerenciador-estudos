package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Data
public class Resumo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(name="conteudo", length=2147483647)
    private String conteudo;

    @Column(nullable = false)
    private ZonedDateTime dataCriacao;

    @Column
    private ZonedDateTime dataUltimaAtualizacao;

    @ManyToOne
    private Evento evento;
}
