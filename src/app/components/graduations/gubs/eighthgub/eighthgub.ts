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
  override belt = '8° Gub - Faixa Amarela - "Terra"';
  override poomsae = 'Poomsae Taeguk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taeguk Il Jang - "Céu"', description: '1장 - Keon ☰' }
  ];

  override kibonJaseList = [
    { name: 'Ap Sogi', description: 'Base com os pés ligeiramente afastados (distância de 1 passo), ambos apontando para a frente.' }
  ];

  override makkiList = [
    { name: 'Palmok Hansonnal Arae Makki', description: 'Defesa com o antebraço (e uma mão aberta) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Hansonnal Momtong Makki', description: 'Defesa com o antebraço (e uma mão aberta) na parte média (torso).' },
    { name: 'Palmok Hansonnal Olgul Makki', description: 'Defesa com o antebraço (e uma mão aberta) na parte alta (acima dos ombros).' },
    { name: 'Hechyo Sonnal Arae Makki', description: 'Defesa com os dois antebraços (ao mesmo tempo) (e ambas as mãos abertas) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Sonnal Otgeoreo Arae Makki', description: 'Defesa com os dois antebraços cruzados (e ambas as mãos abertas) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Sonnal Otgeoreo Olgul Makki', description: 'Defesa com os dois antebraços cruzados (e ambas as mãos abertas) na parte alta (acima dos ombros).' }
  ];

  override konKyokList = [
    { name: 'Dubon Jireugi', description: 'Dois socos com as duas mãos à frente.' },
    { name: 'Sonnal Momtong Chigi', description: 'Golpe com a faca da mão (parte de fora da mão) na parte média (torso)' },
    { name: 'Sonnal Dung Momtong Chigi', description: 'Golpe com o dorso da faca da mão (parte de dentro da mão) na parte média (torso)' }
  ];

  override balKiSulList = [
    { name: 'Gulo Bandal Chagi', description: 'Chute em meia-lua avançando (buscando o alvo).' },
    { name: 'Gulo Dollyo Chagi', description: 'Chute circular avançando (buscando o alvo).' },
    { name: 'Gulo Yop Chagi', description: 'Chute lateral avançando (buscando o alvo).' }
  ];

  override ironList = [
    { question: 'Qual o significado do Taeguk Il Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
