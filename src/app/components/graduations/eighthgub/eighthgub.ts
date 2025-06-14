import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eighthgub',
  imports: [MatListModule, MatCardModule],
  templateUrl: './eighthgub.html',
  styleUrl: './eighthgub.css'
})
export class EighthgubComponent {

  constructor(private router: Router) {}

  goToGraduations(){
    this.router.navigateByUrl('/graduacoes');
  };

}
