package br.com.studymanager.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class MateriaDto implements Serializable {

    private Long id;

    private String nome;

    private List<CronogramaDto> listaCronograma;
}
