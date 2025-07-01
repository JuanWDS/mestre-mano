import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GubsComponent } from '../gubs';

@Component({
  selector: 'app-eighthgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class EighthgubComponent extends GubsComponent {
  override belt = '8° Gub - Faixa Amarela - Esperança';
  override abstract = 'A Terra é fértil. Marca a preparação das bases. O aluno começa a compreender os fundamentos do Taekwondo.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taegeuk Il Jang - "Céu" - 1장 - ☰', description: 'O primeiro poomsae. Representa o nascimento, o começo de tudo, como o céu limpo. O praticante começa seu caminho com humildade e mente aberta.' }
  ];

  override kibonJaseList = [
    { name: 'Ap Sogi', description: 'Base com os pés ligeiramente afastados (distância de 1 passo), ambos apontando para a frente.' }
  ];

  override makkiList = [
    { name: 'Palmok Hansonnal Arae Makki', description: 'Defesa com o antebraço (e uma mão aberta) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Hansonnal Momtong Makki', description: 'Defesa com o antebraço (e uma mão aberta) na parte média (torso).' },
    { name: 'Palmok Hansonnal Olgul Makki', description: 'Defesa com o antebraço (e uma mão aberta) na parte alta (acima dos ombros).' },
    { name: 'Retchyo Sonnal Arae Makki', description: 'Defesa com os dois antebraços (ao mesmo tempo) (e ambas as mãos abertas) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Sonnal Otchigoreo Arae Makki', description: 'Defesa com os dois antebraços cruzados (e ambas as mãos abertas) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Sonnal Otchigoreo Olgul Makki', description: 'Defesa com os dois antebraços cruzados (e ambas as mãos abertas) na parte alta (acima dos ombros).' }
  ];

  override konKyokList = [
    { name: 'Sonnal Momtong TTchigi', description: 'Golpe com a faca da mão (parte de fora da mão) na parte média (torso)' },
    { name: 'Sonnal Dung Momtong TTchigi', description: 'Golpe com o dorso da faca da mão (parte de dentro da mão) na parte média (torso)' }
  ];

  override balKiSulList = [
    { name: 'Gulo Bandal Tchagi', description: 'Chute semi-lateral avançando (buscando o alvo).' },
    { name: 'Gulo Dollyo Tchagi', description: 'Chute circular avançando (buscando o alvo).' },
    { name: 'Gulo Yop Tchagi', description: 'Chute lateral avançando (buscando o alvo).' }
  ];

  override ironList = [
    { question: 'Qual a capital do Taekwondo?' },
    { question: 'Quem trouxe o Taekwondo para o Brasil?' },
    { question: 'Qual o significado do Taegeuk Il Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
