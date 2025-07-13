import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GubsComponent } from '../gubs';

@Component({
  selector: 'app-secondgub',
  imports: [],
  templateUrl: '../gubs.html',
  styleUrl: '../gubs.css'
})
export class SecondgubComponent extends GubsComponent{
  override belt = '2° Gub - Faixa Vermelha - Alerta';
  override abstract = 'O broto. A planta começa a surgir. O aluno mostra progresso técnico e desenvolvimento motor.';
  override poomsae = 'Poomsae Taegeuk - 태극 품새 - "Formas de Equilíbrio e Harmonia":';

  constructor(router: Router) {
    super(router);
  };

  override poomsaeList = [
    { name: 'Poomsae Taegeuk Chil Jang - "Montanha" - 7장 - ☶', description: 'Representa firmeza e autocontrole. Os movimentos são mais fortes e calmos, expressando domínio interno e externo. ' }
  ]; 

  override kibonJaseList = [
    { name: 'Natcho Sogi', description: 'Base com os pés levemente voltados para fora e joelhos levemente flexionados além da largura dos ombros (base do cavalo). ' },
  ];

  override makkiList = [
    { name: 'Batasong Momtong makki ', description: 'Na base de Bon sogi, a palma da mão defende de fora para dentro em direção ao meio. ' },
    { name: 'Batasong Kodro Momtong makki ', description: 'Na base de Bon sogi, a palma da mão defende de fora para dentro em direção ao meio,utilizando o outro braço como apoio. ' },
    { name: 'Palkup Kyocha Makki', description: 'Com os dois braços na diagonal, um em frente ao rosto e o outro em frente ao tronco em direção para baixo,ambos focando a defesa no cotovelo e punhos fechados. ' },
    { name: 'Palmok Retchio momtong makki', description: 'Com os punhos fechados e os antebraços virados para seu peito, expanda para os lados na altura de seu tronco. ' },
    { name: 'Bande Kayo makki', description: 'Na base de Ap Kubi, defesa descendo para dentro o antebraço do mesmo lado da perna da frente, enquanto o outro braço sobe para o lado de fora na altura do rosto. ' },
    { name: 'Kayo Makki', description: 'Na base de Ap Kubi, defesa elevando o antebraço do mesmo lado da perna da frente para fora na altura do rosto, enquanto o outro braço desce para dentro. ' },
    { name: 'Bo Jumok makki', description: 'Em Moa Sogi, mãos unidas sobem do abdômen até o rosto, com a direita fechada e a esquerda á envolvendo. ' },
  ];

  override konKyokList = [
    { name: 'Jetchio Djireugi', description: 'Ataque fazendo o movimento de garra com os dois antebraços na altura da cabeça com punhos fechados. ' },
    { name: 'Sonnal Olgul Tchigi', description: 'Ataque com a lateral da mão aberta,palma virada para baixo tendo como alvo a têmpora. ' },
    { name: 'Dung Jumok kodro ap Tchigi', description: 'Ataque projetando o dorso do punho para frente utilziando o outro braço como apoio abaixo do braço atacante. ' },
    { name: 'Sonnal Tok Tchigi', description: 'A palma da mão irá ser direcionada de baixo para cima tendo o queixo como alvo. ' },
  ];

  override balKiSulList = [
    { name: 'Murup Ap Tchigi Tchagi', description: 'Técnica que eleva o joelho frontalmente para abater o alvo. ' },
    { name: 'Tuit Mon Dollyo Tchagi', description: 'Técnica de chute giratório (girar pelas costas) com salto na altura da cabeça,utilizando o calcanhar para atingir o alvo.' },
    { name: 'Tuit Rejon Dollyo Tchagi', description: 'Técnica de chute giratório fazendo o movimento da perna de fora para dentro. ' },
    { name: 'Bandal + Dollyo Tchagi', description: 'Técnica de chute semi-circular seguido de um chute lateral na cabeça.(podendo-se pedir outras sequencias de chute) ' },
    { name: 'Bitro Tchagi', description: 'Técnica de chute utilizando a perna de trás para chutar com o pé estendido, use a parte superior para chutar em direção contrária.' },
    { name: 'Ogoro Tchagi', description: 'Técnica de chute utilizando a perna como um gancho tendo como alvo a base de apoio, visando o desequilibrio do inimigo. ' },
    { name: 'Tchanorigui Tchagi', description: 'Técnica de chute utilizando o Yop Tchagui tendo como alvo o joelho. ' },
    { name: 'Dansang Ap Tchagi', description: 'Técnica de chute envolvendo um Ap tchagi e suspendendo-a no ar por um periodo curto, com a outra perna executar o mesmo chute normalmente. ' },
  ];

  override ironList = [
    { question: 'Qual o significado do Taegeuk Chil Jang?' },
    { question: 'Qual o significado da sua Faixa?' }
  ];

}
