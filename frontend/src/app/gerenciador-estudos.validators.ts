import { FormControl, FormGroupDirective, NgForm, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Materia } from './servico/materia/materia';

export class MateriaCrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(controle: FormControl | null, formulario: FormGroupDirective | NgForm | null): boolean {
        return controle.touched
            && (formulario.hasError('materiaObrigatoria') || formulario.hasError('materiaNaoIdentificada') || controle.invalid);
    }
}

export const materiaNaoIdentificadoValidator: ValidatorFn = (formulario: FormGroup): ValidationErrors | null => {
    const materia = formulario.controls.materia.value;
    return (materia && materia instanceof Materia || (materia == null || materia === ''))
        ? null : { materiaNaoIdentificada: true };
};

