package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class MateriaCronograma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cronograma cronograma;

    @ManyToOne
    private Materia materia;

    @OneToMany(mappedBy = "materiaCronograma")
    private List<TopicoMateriaCronograma> listaTopicoMateriaCronograma;
}
