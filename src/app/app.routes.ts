import { Routes } from '@angular/router';
import { TenthgubComponent } from './components/graduations/gubs/tenthgub/tenthgub';
import { NinthgubComponent } from './components/graduations/gubs/ninthgub/ninthgub';
import { EighthgubComponent } from './components/graduations/gubs/eighthgub/eighthgub';
import { GraduationsComponent } from './components/graduations/graduations';
import { SeventhgubComponent } from './components/graduations/gubs/seventhgub/seventhgub';
import { SixthgubComponent } from './components/graduations/gubs/sixthgub/sixthgub';
import { FifthgubComponent } from './components/graduations/gubs/fifthgub/fifthgub';
import { FourthgubComponent } from './components/graduations/gubs/fourthgub/fourthgub';
import { ThirdgubComponent } from './components/graduations/gubs/thirdgub/thirdgub';
import { SecondgubComponent } from './components/graduations/gubs/secondgub/secondgub';
import { FirstgubComponent } from './components/graduations/gubs/firstgub/firstgub';

export const routes: Routes = [
  { path: '', component: GraduationsComponent },
  { path: 'graduacoes', component: GraduationsComponent },
  { path: 'graduacoes/decimogub', component: TenthgubComponent },
  { path: 'graduacoes/nonogub', component: NinthgubComponent },
  { path: 'graduacoes/oitavogub', component: EighthgubComponent },
  { path: 'graduacoes/setimogub', component: SeventhgubComponent },
  { path: 'graduacoes/sextogub', component: SixthgubComponent },
  { path: 'graduacoes/quintogub', component: FifthgubComponent },
  { path: 'graduacoes/quartogub', component: FourthgubComponent },
  { path: 'graduacoes/terceirogub', component: ThirdgubComponent },
  { path: 'graduacoes/segundogub', component: SecondgubComponent },
  { path: 'graduacoes/primeirogub', component: FirstgubComponent }
];
