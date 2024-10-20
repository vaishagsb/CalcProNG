import { Component } from '@angular/core';

@Component({
  selector: 'app-personalloancalculator',
  templateUrl: './personalloancalculator.component.html',
  styleUrls: ['./personalloancalculator.component.css']
})
export class PersonalLoanCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTenure: number = 0;

  emi: number | null = null;
  totalInterest: number = 0;
  totalPayment: number = 0;

  calculateEMI() {
    if (this.loanAmount && this.interestRate && this.loanTenure) {
      // Convert interest rate from annual to monthly
      const monthlyInterestRate = this.interestRate / 12 / 100;

      // EMI calculation formula
      this.emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTenure)) /
                 (Math.pow(1 + monthlyInterestRate, this.loanTenure) - 1);

      // Total payment and interest calculations
      this.totalPayment = this.emi * this.loanTenure;
      this.totalInterest = this.totalPayment - this.loanAmount;
    }
  }
}
