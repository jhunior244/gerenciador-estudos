package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Cronograma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nome;

    @ManyToOne
    private Usuario usuario;

    @OneToMany(mappedBy = "cronograma")
    private List<MateriaCronograma> listaMateriaCronograma;
}
