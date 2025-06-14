import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ninthgub',
  imports: [MatListModule, MatCardModule],
  templateUrl: './ninthgub.html',
  styleUrl: './ninthgub.css'
})
export class NinthgubComponent {

  constructor(private router: Router) {}

  goToGraduations(){
    this.router.navigateByUrl('/graduacoes');
  };

}
