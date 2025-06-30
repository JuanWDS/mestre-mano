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
    { name: 'Poomsae Taegeuk Sa Jang', description: 'Simboliza o "yin-yang" na filosofia oriental, representando o equilíbrio e a harmonia das forças opostas no universo' }
  ];

  override kibonJaseList = [
    { name: 'Bon sogi', description: 'Base com pé traseiro firme apoiado no chão junto com  o pé da frente com as pontas no chão e os joelhos levemente flexionados' },
  ];

  override makkiList = [
    { name: 'Sonnal Momtong Makki', description: 'Na base de Duit Kubi,defesa usando a lateral da mão com a palma virada levemente para baixo' },
    { name: 'Palkup Uryo makki', description: 'Na base de Duit Kubi,Defesa usando o cotovelo com o braço para baixo' },
    { name: 'Batasong Olyo makki', description: 'Defesa elevando a palma da mão para cima.' },
  ];

  override konKyokList = [
    { name: 'Sonnal Gebipum Mok Chigi', description: 'Golpe com a mão em faca na garganta, com a outra mão protegendo acima da cabeça.' },
    { name: 'Dung Jumok Olgul ap chigi', description: 'Golpe frontal com o dorso do punho na altura do rosto. ' },
    { name: 'Pion Son Cut Seuo Tchirigui', description: 'Estocada para frente com a ponta dos dedos em posição vertical enquanto apoiado com o outro braço de mão aberta' },
    { name: 'Palkup Olyo Chigi', description: 'Golpe subindo frontalmente com o cotovelo ' },
  ];

  override balKiSulList = [
    { name: 'Mon Dollyo Chagi', description: 'Chute giratório na altura da cabeça,utilizando o calcanhar para atingir o alvo' },
    { name: 'Mon Rejon An Chagi', description: 'Chute giratorio fazendo o movimento da perna de fora para dentro ' },
    { name: 'Tuit Dubon Bandal', description: 'Salto com dois chutes semi-laterais alternados ' },
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Sa Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
