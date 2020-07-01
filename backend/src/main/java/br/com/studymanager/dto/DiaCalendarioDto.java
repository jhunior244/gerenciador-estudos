package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.List;

@Data
public class DiaCalendarioDto implements Serializable {

    private ZonedDateTime data;

    private List<EventoDto> listaEvento;
}
