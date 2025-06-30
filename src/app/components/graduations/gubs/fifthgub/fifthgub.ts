import { Component } from '@angular/core';
import { GubsComponent } from '../gubs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fifthgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class FifthgubComponent extends GubsComponent {
  override belt = '5° Gub - Faixa Verde Escura - Crescimento';
  override abstract = 'A planta se fortalece. O aluno aprofunda suas técnicas e adquire mais controle corporal.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: '', description: '' }
  ];

  override kibonJaseList = [
    { name: '', description: '' },
  ];

  override makkiList = [
    { name: '', description: '' },
  ];

  override konKyokList = [
    { name: '', description: '' },
  ];

  override balKiSulList = [
    { name: '', description: '' },
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Sa Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
