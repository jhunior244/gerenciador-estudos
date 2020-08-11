package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class TopicoMateriaCronogramaDto implements Serializable {

    private Long id;

    private Long horasEstimadasEstudo;

    private Long questoesEstimadasEstudo;

    private MateriaCronogramaDto materiaCronograma;

    private TopicoDto topico;
}
