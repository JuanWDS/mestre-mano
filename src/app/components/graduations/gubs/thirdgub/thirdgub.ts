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
    { name: 'Poomsae Taegeuk Oh Jang - "Vento" - 5장 - ☴', description: 'Representa flexibilidade e persistência. Os movimentos combinam suavidade com força, refletindo maturidade técnica.' }
  ];

  override kibonJaseList = [
    { name: 'Ap Koa sogi', description: 'Base cruzada com a perna esquerda passando pela frente da perna base' },
  ];

  override makkiList = [
    { name: 'Palmok Pakat Momtong Makki', description: 'Defesa usando a parte externa do antebraço elevando-o para frente.' },
    { name: 'Palmok Retchio Olgul Makki', description: 'Defesa elevando os dois antebraços para cima na altura da cabeça com punhos fechados.' },
    { name: 'Sonnal Dum Momtong Makki', description: 'Defesa com a palma da mão voltada para fora, defendendo o tronco ' }
  ];

  override konKyokList = [
    { name: 'Sonnal Geppum Mok Tchigi', description: 'Ataque  utilizando a lateral da mão aberta com a palma para cima,tendo como alvo o pescoço.' },
    { name: 'Pion Son Cut Opo Tchirigui', description: 'Estocada com as pontas dos dedos na vertical.' },
  ];

  override balKiSulList = [
    { name: 'Jejeri Bandal Tchagi', description: 'Técnica de chute semi-lateral permanecendo no mesmo lugar na costela. ' },
    { name: 'Jejeri Dollyo Tchagi', description: 'Técnica de chute circular permanecendo no mesmo lugar na altura da cabeça.' },
    { name: 'Jejeri Ap Tchagi', description: 'Técnica de chute frontal permanecendo no mesmo lugar utilizando a sola do pé.' },
    { name: 'Jejeri Yop Tchagi', description: 'Técnica de chute lateral permanecendo no mesmo lugar.' }
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Oh Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
