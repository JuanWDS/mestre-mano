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
  override poomsae = 'Poomsae Taeguk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taeguk Ee Jang - "Lago" - 2장 - ☱', description: 'Simboliza tranquilidade e calma. O aluno desenvolve disciplina e autocontrole, executando os movimentos com fluidez.' }
  ];

  override kibonJaseList = [
    { name: '', description: '' },
  ];

  override makkiList = [
    { name: '', description: '' },
  ];

  override konKyokList = [
    { name: '', description: '' },
  ];

  override balKiSulList = [
    { name: '', description: '' },
  ];

  override ironList = [
    { question: '' },
  ];

}
