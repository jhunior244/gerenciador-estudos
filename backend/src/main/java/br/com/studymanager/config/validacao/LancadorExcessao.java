package br.com.studymanager.config.validacao;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class LancadorExcessao extends RuntimeException {

    public LancadorExcessao(String message){
        super(message);
    }
}
