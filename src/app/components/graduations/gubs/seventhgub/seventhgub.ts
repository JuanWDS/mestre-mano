import { Component } from '@angular/core';
import { GubsComponent } from '../gubs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seventhgub-component',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class SeventhgubComponent extends GubsComponent {
  override belt = '7° Gub - Faixa Laranja - "Terra Arada"';
  override abstract = 'A preparação está feita. O aluno assimila melhor os fundamentos e está pronto para crescer.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taegeuk Yi Jang - "Lago" - 2장 - ☱', description: 'Simboliza tranquilidade e calma. O aluno desenvolve disciplina e autocontrole, executando os movimentos com fluidez.' }
  ];

  override kibonJaseList = [
    { name: 'Tchuchum Sogi', description: 'Base com os pés paralelos e joelhos levemente flexionados afastados além da largura dos ombros (base do cavalo).' },
  ];

  override makkiList = [
    { name: 'Palmok An Momtong Makki', description: 'Defesa com o antebraço oposto à perna da frente na parte média (torso).' }
  ];

  override konKyokList = [
    { name: 'Dubon Djireugi', description: 'Dois socos com mãos alternadas.' }
  ];

  override balKiSulList = [
    { name: 'Dubon Bandal', description: 'Dois chutes semi-circulares com pernas alternadas.' }
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Yi Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
