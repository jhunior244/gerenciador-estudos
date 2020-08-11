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
    @JoinTable(name = "topico_materia", joinColumns =
    @JoinColumn(name = "topico_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "materia_id", referencedColumnName = "id"))
    private List<Materia> listaMateria;
}
