package br.com.studymanager.entidade;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class PesoRespostaCard {

    public enum Valores {
        ERREI(1, "Errei", 0),
        CONFUSO(2, "Confuso", 1),
        FACIL(3, "Facil", 2.3),
        TRANQUILO(4, "Tranquilo", 4.5);

        private long id;
        private String nome;
        private double peso;

        Valores(int id, String nome, double peso) {
            this.nome = nome;
            this.id = id;
            this.peso = peso;
        }

        public long obtemId() {
            return this.id;
        }

        public double obtemPeso() {
            return this.peso;
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
