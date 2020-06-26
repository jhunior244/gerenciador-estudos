package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class TipoEvento {
    public enum Valores {
        PROVA(1, "Prova"),
        TRABALHO(2, "Trabalho"),
        EXERCICIO_AVALIATIVO(3, "Exercicio avaliativo");

        private long id;
        private String nome;

        Valores(int id, String nome) {
            this.nome = nome;
            this.id = id;
        }

        public long obtemId() {
            return this.id;
        }
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;
}
