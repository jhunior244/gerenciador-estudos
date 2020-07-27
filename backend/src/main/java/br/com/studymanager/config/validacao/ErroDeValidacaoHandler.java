package br.com.studymanager.config.validacao;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@Data
@RestControllerAdvice
public class ErroDeValidacaoHandler extends Exception {
	
	@Autowired
	private MessageSource messageSource;

	private int status;
	private int codigo;
	private String erro;
	
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(ErroDeValidacaoHandler.class)
	public static ErroDeValidacaoHandler handle(String exception) {
//		List<ErroDeFormularioDto> dto = new ArrayList<>();
//
//		List<FieldError> fieldErrors = exception.getBindingResult().getFieldErrors();
//		fieldErrors.forEach(e -> {
//			String mensagem = messageSource.getMessage(e, LocaleContextHolder.getLocale());
//			ErroDeFormularioDto erro = new ErroDeFormularioDto(e.getField(), mensagem);
//			dto.add(erro);
//		});
		ErroDeValidacaoHandler erro = new ErroDeValidacaoHandler();
		erro.setErro(exception);
		erro.setCodigo(400);
		return erro;
	}

}
