package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class TopicoMateriaCronograma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long horasEstimadasEstudo;

    @Column
    private Long questoesEstimadasEstudo;

    @ManyToOne
    private MateriaCronograma materiaCronograma;

    @ManyToOne
    private Topico topico;
}
