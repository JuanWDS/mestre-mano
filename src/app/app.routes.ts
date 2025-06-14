import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { TenthgubComponent } from './components/graduations/tenthgub/tenthgub';
import { NinthgubComponent } from './components/graduations/ninthgub/ninthgub';
import { EighthgubComponent } from './components/graduations/eighthgub/eighthgub';

export const routes: Routes = [
  {
    path: 'graduacoes',
    component: HomeComponent
  },
  {
    path: 'graduacoes/decimogub',
    component: TenthgubComponent
  },
  {
    path: 'graduacoes/nonogub',
    component: NinthgubComponent
  },
  {
    path: 'graduacoes/oitavogub',
    component: EighthgubComponent
  }
];
