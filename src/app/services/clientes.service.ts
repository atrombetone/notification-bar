import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  get(classe: string): Observable<Array<Cliente>> {
    let clientes = [] as Cliente[];

    clientes.push({id: 1, name: 'Andre'});
    clientes.push({id: 2, name: 'Tati'});
    clientes.push({id: 3, name: 'Vivi'});

    return of(clientes);
  }
}
