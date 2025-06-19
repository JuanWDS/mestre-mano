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
  abstract = '';
  poomsae = '';
  kibonJase = 'Kibon Jase - 기본 자세 - "Posições Básicas":';
  kibonDongjak = 'Kibon Dongjak - 기본 동작 - "Movimentos Básicos":';
  balKiSul = 'Bal Ki Sul - 발기슬 - "Técnicas de Ataque com as Pernas":';
  makki = 'Makki - 막기 - "Técnicas de Defesa":';
  konKyok = 'Kon Kyok - 콜국 - "Técnicas de Ataque com os Braços":';
  iron = 'Iron - 이론 - "Conhecimento teórico":';

  constructor(private router: Router) {};

  poomsaeList: { name: string; description: string }[] = [];

  kibonJaseList: { name: string; description: string }[] = [];

  makkiList: { name: string; description: string }[] = [];

  konKyokList: { name: string; description: string }[] = [];

  balKiSulList: { name: string; description: string }[] = [];

  ironList: { question: string }[] = [];

  goToGraduations(){
    this.router.navigateByUrl('/graduacoes');
  };

}
