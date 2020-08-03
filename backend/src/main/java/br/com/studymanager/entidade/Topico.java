package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Topico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column
    private Long horasEstimadasEstudo;

    @Column
    private Long questoesEstimadasEstudo;

    @ManyToOne
    private Materia materia;
}
