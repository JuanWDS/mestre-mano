import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GubsComponent } from '../gubs';

@Component({
  selector: 'app-ninthgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class NinthgubComponent extends GubsComponent {
  override belt = '9° Gub - Faixa Cinza - Inocência';
  override abstract = 'O Início. Representa o abandono da pureza e da inocência. O aluno está conhecendo os fundamentos do Taekwondo.';
  override poomsae = 'Poomsae - 품새 - "Formas":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Saju Ap Tchagi', description: 'Chute frontal em quatro direções.' },
    { name: 'Saju Djireugi', description: 'Soco em quatro direções.' }
  ];

  override kibonJaseList = [
    { name: 'Moa Sogi', description: 'Base com os pés juntos.' },
    { name: 'Pioni Sogi', description: 'Base com os pés levemente abertos e afastados na largura da cintura.' },
    { name: 'Naran Sogi', description: 'Base com os pés paralelos afastados na largura da cintura.' },
    { name: 'Ap Kubi Sogi', description: 'Base de avanço com o joelho da frente flexionado e o de trás esticado.' },
  ];

  override makkiList = [
    { name: 'Palmok Arae Makki', description: 'Defesa com o antebraço na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Momtong Makki', description: 'Defesa com o antebraço na parte média (torso).' },
    { name: 'Palmok Olgul Makki', description: 'Defesa com o antebraço na parte alta (acima dos ombros).' },
    { name: 'Retchyo Arae Makki', description: 'Defesa com os dois antebraços (ao mesmo tempo) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Otchigoreo Arae Makki', description: 'Defesa com os dois antebraços cruzados na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Otchigoreo Olgul Makki', description: 'Defesa com os dois antebraços cruzados na parte alta (acima dos ombros).' }
  ];

  override konKyokList = [
    { name: 'Arae Djireugi', description: 'Soco na parte baixa (abaixo da cintura).' },
    { name: 'Momtong Djireugi', description: 'Soco na parte média (torso).' },
    { name: 'Olgul Djireugi', description: 'Soco na parte alta (acima dos ombros).' },
    { name: 'Bande Djireugi', description: 'Soco com o mesmo braço da perna à frente.' },
    { name: 'Baro Djireugi', description: 'Soco com o braço oposto à perna da frente.' }
  ];

  override balKiSulList = [
    { name: 'Bandal Tchagi', description: 'Chute semi-lateral.' },
    { name: 'Ap Tchagi', description: 'Chute frontal.' },
    { name: 'Ap Oligui Tchagi', description: 'Chute frontal com a perna esticada (subida e descida).' },
    { name: 'Yop Oligui Tchagi', description: 'Chute lateral com a perna esticada (subida e descida).' },
    { name: 'An Tchagi', description: 'Chute de fora para dentro.' },
    { name: 'Pakat Tchagi', description: 'Chute de dentro para fora.' },
    { name: 'Dollyo Tchagi', description: 'Chute circular.' }
  ];

  override ironList = [
    { question: 'O que significa Taekwondo?' },
    { question: 'Qual o nome do seu Mestre?' },
    { question: 'Qual o nome da sua Escola?' },
    { question: 'Quais são os princípios do Taekwondo?' }
  ];

}
