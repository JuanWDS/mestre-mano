import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graduations-component',
  imports: [],
  templateUrl: './graduations.html',
  styleUrl: './graduations.css'
})
export class GraduationsComponent {

  constructor(private router: Router) {}

  goToTenthgub(): void {
    this.router.navigateByUrl('/graduacoes/decimogub');
  };

  goToNingthgub(): void {
    this.router.navigateByUrl('/graduacoes/nonogub');
  };

  goToEighthgub(): void {
    this.router.navigateByUrl('/graduacoes/oitavogub');
  };

  goToSeventhgub(): void {
    this.router.navigateByUrl('/graduacoes/setimogub');
  };

  goToSixthgub(): void {
    this.router.navigateByUrl('/graduacoes/sextogub');
  };

  goToFifthgub(): void {
    this.router.navigateByUrl('/graduacoes/quintogub');
  };

  goToFourthgub(): void {
    this.router.navigateByUrl('/graduacoes/quartogub');
  };

  goToThirdgub(): void {
    this.router.navigateByUrl('/graduacoes/terceirogub');
  };

  goToSecondgub(): void {
    this.router.navigateByUrl('/graduacoes/segundogub');
  };

  goToFirstgub(): void {
    this.router.navigateByUrl('/graduacoes/primeirogub');
  };

}
