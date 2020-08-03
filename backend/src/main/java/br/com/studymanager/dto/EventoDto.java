package br.com.studymanager.dto;

import br.com.studymanager.entidade.Cronograma;
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

    private CronogramaDto cronograma;
}
