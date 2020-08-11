package br.com.studymanager.dto;

import br.com.studymanager.entidade.Cronograma;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class MateriaCronogramaDto implements Serializable {
    private Long id;

    private Cronograma cronograma;

    private MateriaDto materia;

    private List<TopicoMateriaCronogramaDto> listaTopicoMateriaCronograma;
}
