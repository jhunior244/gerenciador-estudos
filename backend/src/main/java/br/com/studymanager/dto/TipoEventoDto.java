package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class TipoEventoDto implements Serializable {

    private Long id;

    private String nome;
}
