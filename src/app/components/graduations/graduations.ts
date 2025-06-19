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

  goToDecimogub(){
    this.router.navigateByUrl('/graduacoes/decimogub');
  };

  goToNonogub(){
    this.router.navigateByUrl('/graduacoes/nonogub');
  };

  goToOitavogub(){
    this.router.navigateByUrl('/graduacoes/oitavogub');
  };

}
