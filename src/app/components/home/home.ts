import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

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
