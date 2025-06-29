import { Routes } from '@angular/router';
import { TenthgubComponent } from './components/graduations/gubs/tenthgub/tenthgub';
import { NinthgubComponent } from './components/graduations/gubs/ninthgub/ninthgub';
import { EighthgubComponent } from './components/graduations/gubs/eighthgub/eighthgub';
import { GraduationsComponent } from './components/graduations/graduations';
import { SeventhgubComponent } from './components/graduations/gubs/seventhgub/seventhgub';
import { SixthgubComponent } from './components/graduations/gubs/sixthgub/sixthgub';

export const routes: Routes = [
  { path: '', component: GraduationsComponent },
  { path: 'graduacoes', component: GraduationsComponent },
  { path: 'graduacoes/decimogub', component: TenthgubComponent },
  { path: 'graduacoes/nonogub', component: NinthgubComponent },
  { path: 'graduacoes/oitavogub', component: EighthgubComponent },
  { path: 'graduacoes/setimogub', component: SeventhgubComponent },
  { path: 'graduacoes/sextogub', component: SixthgubComponent },
];
