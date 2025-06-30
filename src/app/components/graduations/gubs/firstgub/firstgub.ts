import { Component } from '@angular/core';
import { GubsComponent } from '../gubs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class FirstgubComponent extends GubsComponent {
  override belt = '1° Gub - Faixa Vermelha Escura - Perigo';
  override abstract = 'O broto. A planta começa a surgir. O aluno mostra progresso técnico e desenvolvimento motor.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: '', description: '' }
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
    { question: 'Qual o significado do Taegeuk Oh Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

} {

}
