import { Component } from '@angular/core';
import { GubsComponent } from '../gubs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sixthgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class SixthgubComponent extends GubsComponent {
  override belt = '6° Gub - Faixa Verde - Crescimento';
  override abstract = 'A planta começa a surgir. O aluno mostra progresso técnico e desenvolvimento motor.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taegeuk Sam Jang - "Fogo" - 3장 - ☲ - 20 Movimentos', description: 'Representa energia e paixão. Os movimentos tornam-se mais complexos, e o aluno começa a brilhar com autoconfiança.' }
  ];

  override kibonJaseList = [
    { name: 'Dwit Kubi sogi', description: 'Base com os pés em "L" e joelhos levemente flexionados.' },
  ];

  override makkiList = [
    { name: 'Hansonnal Pakat momtong makki', description: 'Defesa com o antebraço de fora para dentro na parte média (torso).' },
    { name: 'Batasong Nulo makki', description: 'Defesa com a palma da mão (movimento de empurrar) para baixo.' }
  ];

  override konKyokList = [
    { name: 'Sonnal Mok Tchigi', description: 'Golpe com a faca da mão (parte de fora da mão) na altura do pescoço.' },
    { name: 'Pyon Son Cut Tchirigi', description: 'Perfuração com a ponta dos dedos (mão na vertical) na altura da garganta.' },
    { name: 'Palkup Dollyo Tchigi', description: 'Golpe circular com o cotovelo.' }
  ];

  override balKiSulList = [
    { name: 'Yop Tchagi', description: 'Chute lateral.' },
    { name: 'Neryo Tchagi', description: 'Chute descendente (chute machado).' },
    { name: 'Mom Tit Tchagi', description: 'Chute para trás (girando por trás) (coice).' }
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Sam Jang?' },
    { question: 'Quantos movimentos tem o Taegeuk Sam Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
