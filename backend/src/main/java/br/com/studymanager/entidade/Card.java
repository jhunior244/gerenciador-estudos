package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Data
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int numeroRevisaoFeita;

    private int diasRevisaoErrei;

    private int diasRevisaoConfuso;

    private int diasRevisaoFacil;

    private int diasRevisaoTranquilo;

    @Column(name="textoFrente", length=1000, nullable = false)
    private String textoFrente;

    @Column(name="textoTras", length=1000, nullable = false)
    private String textoTras;

    @Column()
    private ZonedDateTime dataUltimaRevisao;

    @Column()
    private ZonedDateTime dataProximaRevisao;

    @ManyToOne
    private Evento evento;
}

