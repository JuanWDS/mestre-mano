import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenthgub',
  imports: [MatListModule, MatCardModule],
  templateUrl: './tenthgub.html',
  styleUrl: './tenthgub.css'
})
export class TenthgubComponent {

  constructor(private router: Router) {}

  goToGraduations(){
    this.router.navigateByUrl('/graduacoes');
  };

}
