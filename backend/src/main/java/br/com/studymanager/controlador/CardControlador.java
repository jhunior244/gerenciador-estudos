package br.com.studymanager.controlador;

import br.com.studymanager.dto.CardDto;
import br.com.studymanager.entidade.Card;
import br.com.studymanager.mapeador.CardMapeador;
import br.com.studymanager.servico.card.ICardServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("card")
public class CardControlador {

    @Autowired
    private ICardServico cardServico;

    @Autowired
    private CardMapeador cardMapeador;

    @PostMapping(path = "/cria")
    public CardDto cria(@RequestBody CardDto obj) throws Exception {
        Card objCriado = cardServico.cria(obj);
        return cardMapeador.paraDto(objCriado);
    }

    @PutMapping(path = "/atualiza")
    public CardDto atualiza(@RequestBody CardDto obj) throws Exception {
        Card objAtualizado = cardServico.atualiza(obj);
        return cardMapeador.paraDto(objAtualizado);
    }

    @GetMapping(path = "/obtem")
    public CardDto obtem(Long id){

        return cardMapeador.paraDto(cardServico.obtem(id));
    }

    @GetMapping(path = "/lista")
    public List<CardDto> lista(Long id){
        List<CardDto> lista = cardServico.lista(id);
        return lista;
    }

    @GetMapping(path = "/listaTodosPorEvento")
    public List<CardDto> listaTodosPorEvento(Long id){
        List<CardDto> lista = cardServico.listaTodosPorEvento(id);
        return lista;
    }

    @GetMapping(path = "/calculaProximaRevisaoCard")
    public void calculaProximaRevisaoCard(Long idCard, Long idPeso){
        cardServico.calculaProximaRevisaoCard(idCard, idPeso);
    }
}
