package br.com.studymanager.dto;

import br.com.studymanager.entidade.Topico;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class MateriaDto implements Serializable {

    private Long id;

    private String nome;

    private List<TopicoDto> listaTopico;

    private List<CronogramaDto> listaCronograma;
}
