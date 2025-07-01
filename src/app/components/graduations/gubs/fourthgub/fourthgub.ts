import { Component } from '@angular/core';
import { GubsComponent } from '../gubs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourthgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class FourthgubComponent extends GubsComponent{
  override belt = '4° Gub - Faixa Azul - Céu';
  override abstract = 'A planta está se elevando até o Céu. O aluno alcança níveis mais elevados de disciplina e técnica.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taegeuk Oh Jang - "Vento" - 5장 - ☴', description: 'Representa flexibilidade e persistência. Os movimentos combinam suavidade com força, refletindo maturidade técnica.' }
  ];

  override kibonJaseList = [
    { name: 'Dwi Koa Sogi', description: 'base com a perna de trás cruzada atrás da perna da frente (o pé cruzado deve estar em Ap Chuk).' },
    { name: 'Sogi', description: 'Base com os pés em "L" (sem flexionar os joelhos).' },
  ];

  override makkiList = [
    { name: 'Palmok Momtong Makki + An Palmok Momtong Makki', description: 'Seqûencia de defesas médias com o antebraço, iniciando de fora para dentro e finalizando de dentro para fora.' },
    { name: 'Palmok Arae Makki + An Palmok Momtong Makki', description: 'Sequência de defesas com o antebraço, iniciando na parte baixa (abaixo da cintura) e finalizando na parte média de dentro para fora (torso).' }
  ];

  override konKyokList = [
    { name: 'Me-Jumok Neryo TTchigi', description: 'Golpe descendente em direção à cabeça com a parte inferior da mão.' },
    { name: 'Dung-Jumok Pakat Olgul TTchigi', description: 'Golpe de fora para dentro com a parte de trás da mão em direção à cabeça.' },
    { name: 'Palkup Pyonjok TTchigi', description: 'Golpe com o cotovelo puxando o alvo para si.' }
  ];

  override balKiSulList = [
    { name: 'Tuit Mom Pakat Tchagi', description: 'Chute de dentro para fora (girando por trás e saltando).' },
    { name: 'Tuit Yop Tchagi', description: 'Chute lateral (saltando).' },
    { name: 'Tuit Mom Tit Tchagi', description: 'Chute para trás (girando por trás e saltando) (coice).' },
    { name: 'Tuit Gulo Bandal Chagi', description: 'Chute semi-lateral (avançando e saltando).' },
    { name: 'Tuit Gulo Dollyo Chagi', description: 'Chute circular (avançando e saltando).' },
    { name: 'Tuit Gulo Yop Chagi', description: 'Chute lateral (avançando e saltando).' },
    { name: 'Tuit Gulo Ap Chagi', description: 'Chute frontal (avançando e saltando).' },
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Oh Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
