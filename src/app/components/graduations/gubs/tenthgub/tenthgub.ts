import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GubsComponent } from '../gubs';

@Component({
  selector: 'app-tenthgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class TenthgubComponent extends GubsComponent {
  override belt = '10° Gub - Faixa Branca - "Nascimento"';
  override poomsae = 'Poomsae - 품새 - "Formas":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Saju Ap Chagi', description: 'Chute frontal em quatro direções.' }
  ];

  override kibonJaseList = [
    { name: 'Moa Sogi', description: 'Base com os pés juntos.' },
    { name: 'Ap Chuk Moa Sogi', description: 'Base com a frente dos pés juntas.' },
    { name: 'Dwi Chuk Moa Sogi', description: 'Base com os calcanhares juntos.' },
  ];

  override makkiList = [
    { name: 'Palmok Arae Makki', description: 'Defesa com o antebraço na parte baixa (abaixo da cintura).' },
    { name: 'Palmok Momtong Makki', description: 'Defesa com o antebraço na parte média (torso).' },
    { name: 'Palmok Olgul Makki', description: 'Defesa com o antebraço na parte alta (acima dos ombros).' },
    { name: 'Hechyo Arae Makki', description: 'Defesa com os dois antebraços (ao mesmo tempo) na parte baixa (abaixo da cintura).' }
  ];

  override konKyokList = [
    { name: 'Arae Jireugi', description: 'Soco na parte baixa (abaixo da cintura).' },
    { name: 'Montong Jireugi', description: 'Soco na parte média (torso).' },
    { name: 'Olgul Jireugi', description: 'Soco na parte alta (acima dos ombros).' }
  ];

  override balKiSulList = [
    { name: 'Bandal Chagi', description: 'Chute em meia-lua.' },
    { name: 'Ap Chagi', description: 'Chute frontal.' },
    { name: 'Ap Oligui Chagi', description: 'Chute frontal com a perna esticada (subida e descida).' },
    { name: 'An Chagi', description: 'Chute de fora para dentro.' },
    { name: 'Bakat Chagi', description: 'Chute de dentro para fora.' }
  ];

  override ironList = [
    { question: 'O que significa Taekwondo?' },
    { question: 'Qual o nome do seu Mestre?' },
    { question: 'Qual o nome da sua Escola?' }
  ];

}
