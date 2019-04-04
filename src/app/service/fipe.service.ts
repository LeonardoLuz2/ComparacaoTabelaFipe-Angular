import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(private http: HttpClient) { }

  ListarMarcas(tipo: string): Observable<any> {
    return this.http.get(`https://fipeapi.appspot.com/api/1/${tipo}/marcas.json`);
  }

  ListarVeiculos(tipo: string, marcaId: number) {
    return this.http.get(`https://fipeapi.appspot.com/api/1/${tipo}/veiculos/${marcaId}.json`);
  }

  ListarModelos(tipo: string, marcaId: number, veiculoId: number) {
    return this.http.get(`https://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marcaId}/${veiculoId}.json`);
  }

  InformacoesModelo(tipo: string, marcaId: number, veiculoId: number, modeloId: number) {
    return this.http.get(`https://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marcaId}/${veiculoId}/${modeloId}.json`);
  }
}
