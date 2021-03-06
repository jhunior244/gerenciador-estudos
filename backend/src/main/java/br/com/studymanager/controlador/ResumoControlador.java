package br.com.studymanager.controlador;

import br.com.studymanager.dto.ResumoDto;
import br.com.studymanager.mapeador.ResumoMapeador;
import br.com.studymanager.servico.IResumoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("resumo")
public class ResumoControlador {

    @Autowired
    private IResumoServico resumoServico;

    @Autowired
    private ResumoMapeador resumoMapeador;

    @PostMapping(path = "/cria")
    public ResumoDto cria(@RequestBody ResumoDto resumo) throws Exception {
        return resumoServico.cria(resumo);
    }

    @GetMapping(path = "/lista")
    public List<ResumoDto> lista(Long id){
        List<ResumoDto> lista = resumoServico.lista(id);
        return resumoServico.lista(id);
    }

    @GetMapping(path = "/obtem")
    public ResumoDto obtem(Long id){

        return resumoMapeador.paraDto(resumoServico.obtem(id));
    }

}
