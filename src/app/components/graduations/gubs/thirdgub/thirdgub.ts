import { Component } from '@angular/core';
import { GubsComponent } from '../gubs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thirdgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class ThirdgubComponent extends GubsComponent {
  override belt = '3° Gub - Faixa Azul Escuro - Céu';
  override abstract = 'O broto. A planta começa a surgir. O aluno mostra progresso técnico e desenvolvimento motor.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taegeuk Yuk Jang - "Água" - 6장 - ☵ - 19 Movimentos', description: 'Simboliza fluidez, inteligência e estratégia. O praticante aprende a se adaptar com leveza, mesmo diante de desafios.' }
  ];

  override kibonJaseList = [
    { name: 'Ap Koa Sogi', description: 'Base com a perna de trás cruzada à frente da perna da frente (o pé cruzado deve estar em Ap Tchuk).' },
  ];

  override makkiList = [
    { name: 'Palmok Pakat Momtong Makki em Duit Kubi Sogi', description: 'Defesa com o antebraço na parte média (torso) na base Duit Kubi.' },
    { name: 'Palmok Retchio Olgul Makki em Ap Kubi Sogi', description: 'Defesa com os dois antebraços (aos dois lados e ao mesmo tempo) na parte alta (acima dos ombros) na base Ap Kubi.' },
    { name: 'Sonnal Dung Momtong Makki', description: 'Defesa com o dorso da faca da mão (parte de dentro da mão) na parte média (torso).' }
  ];

  override konKyokList = [
    { name: '!!!Sonnal Geppum Mok Tchigi!!!', description: 'Golpe com uma mão (faca da mão) à frente (na altura do pescoço) e a outra mão protegendo na parte alta (acima dos ombros).' },
    { name: 'Pion Son Cut Opo Tchirigui', description: 'Perfuração com a ponta dos dedos (mão na horizontal) na altura da garganta.' },
  ];

  override balKiSulList = [
    { name: 'Jejeri Bandal Tchagi', description: 'Chute semi-lateral com a perna da frente.' },
    { name: 'Jejeri Dollyo Tchagi', description: 'Chute circular com a perna da frente.' },
    { name: 'Jejeri Ap Tchagi', description: 'Chute frontal com a perna da frente.' },
    { name: 'Jejeri Yop Tchagi', description: 'Chute lateral com a perna da frente.' }
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Yuk Jang?' },
    { question: 'Quantos movimentos tem o Taegeuk Yuk Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
