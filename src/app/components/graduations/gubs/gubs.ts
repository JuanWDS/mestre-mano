import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gubs',
  imports: [],
  templateUrl: './gubs.html',
  styleUrl: './gubs.css'
})
export class GubsComponent {
  belt = '';
  poomsae = '';
  kibonJase = 'Kibon Jase - 기본 자세 - "Posições Básicas":';
  kibonDongjak = 'Kibon Dongjak - 기본 동작 - "Movimentos Básicos":';
  balKiSul = 'Bal Ki Sul - 발기슬 - "Técnicas de Ataque com as Pernas":';
  makki = 'Makki - 막기 - "Técnicas de Defesa":';
  konKyok = 'Kon Kyok - 콜국 - "Técnicas de Ataque com os Braços":';
  iron = 'Iron - 이론 - "Conhecimento teórico":';

  constructor(
    private router: Router,
  ) {};

  poomsaeList = [
    { name: '', description: '' }
  ];

  kibonJaseList = [
    { name: '', description: '' }
  ];

  makkiList = [
    { name: '', description: '' }
  ];

  konKyokList = [
    { name: '', description: '' }
  ];

  balKiSulList = [
    { name: '', description: '' }
  ];

  ironList = [
    { question: '' }
  ];

  goToGraduations(){
    this.router.navigateByUrl('/graduacoes');
  };

}
