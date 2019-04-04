import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-veiculo-info',
  templateUrl: './veiculo-info.component.html',
  styleUrls: ['./veiculo-info.component.css']
})
export class VeiculoInfoComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit() {

  }

}
