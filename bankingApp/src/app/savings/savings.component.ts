import { Component } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent {


  Total: number;
  Amount = 5000;
  interestRate = 0.01;
  annualCompound = 1;
  years: number;
  calaulateinterest(): void {
    for (let counter = 1; counter < this.years + 1; counter++) {
      this.Total = this.Amount * Math.pow((1 +
        this.interestRate / this.annualCompound),
        (this.annualCompound * counter));
      }
    }

}
