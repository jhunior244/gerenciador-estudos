package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class PesoRespostaCard {

    public enum Valores {
        ERREI(1, "Errei"),
        CONFUSO(2, "Confuso"),
        FACIL(3, "Facil"),
        TRANQUILO(4, "Tranquilo");

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

    @Column(nullable = false)
    private double peso;
}
