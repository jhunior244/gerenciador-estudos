import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class CalendarioService {
    private mesEAnoSubject = new BehaviorSubject<any>(null);
    private mesEAno = { mes: 0, ano: 0 };

    constructor() {
        this.setMesEAno(
            Number.parseFloat(moment().utc().format('YYYY')),
            Number.parseFloat(moment().utc().format('MM'))
        );
    }

    getMesEAno() {
        return this.mesEAnoSubject.asObservable();
    }

    setMesEAno(mes: number, ano: number) {
        this.mesEAno.mes = mes;
        this.mesEAno.ano = ano;
        this.mesEAnoSubject.next(this.mesEAno);
    }
}