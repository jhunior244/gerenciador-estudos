package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;

@Data
public class CardDto implements Serializable {
    private Long id;

    private Long resposta;

    private int numeroRevisaoFeita;

    private int diasRevisaoErrei;

    private int diasRevisaoConfuso;

    private int diasRevisaoFacil;

    private int diasRevisaoTranquilo;

    private String textoFrente;

    private String textoTras;

    private ZonedDateTime dataUltimaRevisao;

    private ZonedDateTime dataProximaRevisao;

    private EventoDto evento;
}
