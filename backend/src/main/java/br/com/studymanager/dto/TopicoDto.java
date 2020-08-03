package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class TopicoDto implements Serializable {
    private Long id;

    private String nome;

    private Long horasEstimadasEstudo;

    private Long questoesEstimadasEstudo;

    private MateriaDto materia;
}
