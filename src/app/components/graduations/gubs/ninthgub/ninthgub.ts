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
  override belt = '9° Gub - Faixa Cinza - "Início"';
  override abstract = 'Representa o abandono da pureza e da inocência. O aluno está conhecendo os fundamentos do Taekwondo.';
  override poomsae = 'Poomsae - 품새 - "Formas":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Saju Ap Chagi', description: 'Chute frontal em quatro direções.' },
    { name: 'Saju Jireugi', description: 'Soco em quatro direções.' }
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
    { name: 'Hechyo Arae Makki', description: 'Defesa com os dois antebraços (ao mesmo tempo) na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Otgeoreo Arae Makki', description: 'Defesa com os dois antebraços cruzados na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Otgeoreo Olgul Makki', description: 'Defesa com os dois antebraços cruzados na parte alta (acima dos ombros).' }
  ];

  override konKyokList = [
    { name: 'Arae Jireugi', description: 'Soco na parte baixa (abaixo da cintura).' },
    { name: 'Momtong Jireugi', description: 'Soco na parte média (torso).' },
    { name: 'Olgul Jireugi', description: 'Soco na parte alta (acima dos ombros).' },
    { name: 'Bande Jireugi', description: 'Soco com o mesmo braço da perna à frente.' },
    { name: 'Baro Jireugi', description: 'Soco com o braço oposto à perna da frente.' }
  ];

  override balKiSulList = [
    { name: 'Bandal Chagi', description: 'Chute em meia-lua.' },
    { name: 'Ap Chagi', description: 'Chute frontal.' },
    { name: 'Ap Oligui Chagi', description: 'Chute frontal com a perna esticada (subida e descida).' },
    { name: 'Yop Oligui Chagi', description: 'Chute lateral com a perna esticada (subida e descida).' },
    { name: 'An Chagi', description: 'Chute de fora para dentro.' },
    { name: 'Bakat Chagi', description: 'Chute de dentro para fora.' },
    { name: 'Dollyo Chagi', description: 'Chute circular.' }
  ];

  override ironList = [
    { question: 'O que significa Taekwondo?' },
    { question: 'Qual o nome do seu Mestre?' },
    { question: 'Qual o nome da sua Escola?' },
    { question: 'Quais são os princípios do Taekwondo?' }
  ];

}
