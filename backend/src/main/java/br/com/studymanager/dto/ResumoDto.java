package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;

@Data
public class ResumoDto implements Serializable {

    private Long id;

    private String titulo;

    private String conteudo;

    private ZonedDateTime dataCriacao;

    private ZonedDateTime dataUltimaAtualizacao;

    private EventoDto evento;
}
