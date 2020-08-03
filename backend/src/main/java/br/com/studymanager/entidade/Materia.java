package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Materia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @ManyToMany(mappedBy = "listaMateria")
    private List<Cronograma> listaCronograma;

    @OneToMany(mappedBy = "materia")
    private List<Topico> listaTopico;
}
