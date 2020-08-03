package br.com.studymanager.controlador;

import br.com.studymanager.dto.MateriaDto;
import br.com.studymanager.mapeador.MateriaMapeador;
import br.com.studymanager.servico.IMateriaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("materia")
public class MateriaControlador {

    @Autowired
    private IMateriaServico materiaServico;

    @Autowired
    private MateriaMapeador materiaMapeador;

    @GetMapping(path = "/lista")
    public List<MateriaDto> lista(@RequestHeader(name="Authorization") String token){
//        long idUsuario = tokenService.getIdUsuario(token.substring(7));
        return materiaMapeador.paraDto(materiaServico.lista());
    }
}
