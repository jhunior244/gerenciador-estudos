package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;

@Data
public class EventoDto implements Serializable {

    private Long id;

    private String nome;

    private String descricao;

    private ZonedDateTime data;

    private TipoEventoDto tipoEvento;
}
