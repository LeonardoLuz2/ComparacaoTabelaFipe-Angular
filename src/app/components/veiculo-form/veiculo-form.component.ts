import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FipeService } from 'src/app/service/fipe.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  marca$: Observable<any>;
  veiculo$: Observable<any>;
  modelo$: Observable<any>;
  informacaoVeiculo$: Observable<any>;

  constructor(private fipeService: FipeService) { }

  ngOnInit() {
  }

  carregarMarcas(tipo: string) {
    this.marca$ =  this.fipeService.ListarMarcas(tipo);
  }

  carregarVeiculos(tipo: string, marcaId: number) {
    this.veiculo$ =  this.fipeService.ListarVeiculos(tipo, marcaId);
  }

  carregarModelos(tipo: string, marcaId: number, veiculoId: number) {
    this.modelo$ =  this.fipeService.ListarModelos(tipo, marcaId, veiculoId);
  }

  informacoesModelo(tipo: string, marcaId: number, veiculoId: number, modeloId: number) {
    this.informacaoVeiculo$ = this.fipeService.InformacoesModelo(tipo, marcaId, veiculoId, modeloId);
  }

}
