import { Component } from '@angular/core';

@Component({
  selector: 'app-fixeddepositcalculator',
  templateUrl: './fixeddepositcalculator.component.html',
  styleUrls: ['./fixeddepositcalculator.component.css']
})
export class FixedDepositCalculatorComponent {
  principalAmount: number = 0;
  interestRate: number = 0;
  tenure: number = 0;
  compoundingFrequency: number = 1; // Default yearly compounding

  maturityAmount: number | null = null;
  totalInterest: number = 0;

  calculateFD() {
    if (this.principalAmount && this.interestRate && this.tenure && this.compoundingFrequency) {
      // Convert interest rate from percentage to decimal
      const rate = this.interestRate / 100;

      // Calculate maturity using compound interest formula
      this.maturityAmount = this.principalAmount * Math.pow((1 + rate / this.compoundingFrequency), this.compoundingFrequency * this.tenure);

      // Calculate total interest earned
      this.totalInterest = this.maturityAmount - this.principalAmount;
    }
  }
}
