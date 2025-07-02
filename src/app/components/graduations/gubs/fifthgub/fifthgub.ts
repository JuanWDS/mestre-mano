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
    { name: 'Poomsae Taegeuk Sa Jang - "Trovão" - 4장 - ☳ - 20 Movimentos', description: 'Simboliza dinamismo e ação repentina. O aluno aprende a reagir com rapidez e precisão, incorporando força e foco.' }
  ];

  override kibonJaseList = [
    { name: 'Bon Sogi', description: 'Base com a perna de trás firme no chão e a perna da frente um pouco à frente (o pé deve estar em Ap Tchuk), com os joelhos levemente flexionados (base do tigre).' },
  ];

  override makkiList = [
    { name: 'Sonnal Momtong Makki em Duit Kubi Sogi', description: 'Defesa com as duas mãos abertas (uma à frente e outra na altura do peito) na parte média (torso) na base Duit Kubi.' },
    { name: 'Palkup Olyo Makki em Duit Kubi Sogi', description: 'Defesa usando o cotovelo com o braço para baixo na base Duit Kubi.' },
    { name: 'Batasong Olyo Makki', description: 'Defesa com a palma da mão (empurrando) para cima.' },
  ];

  override konKyokList = [
    { name: 'Sonnal Geppum Mok Tchigi', description: 'Golpe com uma mão (faca da mão) à frente (na altura do pescoço) e a outra mão protegendo na parte alta (acima dos ombros).' },
    { name: 'Dung Jumok Olgul Ap Tchigi', description: 'Golpe com o dorso do punho cerrado à frente, na altura do rosto.' },
    { name: 'Pion Son Cut Seuo Tchirigui', description: 'Perfuração com a ponta dos dedos (mão na vertical) na altura da garganta enquanto o outro braço apoia o braço de ataque com a mão aberta.' },
    { name: 'Palkup Olyo Tchigi', description: 'Golpe ascendente com o cotovelo.' },
  ];

  override balKiSulList = [
    { name: 'Mom Dollyo Tchagi', description: 'Chute circular (girando por trás) (com Dwi Tchuk ou Balbadak).' },
    { name: 'Mom An Tchagi', description: 'Chute de fora para dentro (girando por trás).' },
    { name: 'Tuit Dubon Bandal Tchagi', description: 'Dois chutes semi-laterais (saltando) com pernas alternadas.' },
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Sa Jang?' },
    { question: 'Quantos movimentos tem o Taegeuk Sa Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
