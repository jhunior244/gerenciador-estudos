package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Topico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @ManyToMany
    private List<Materia> listaMateria;
}
