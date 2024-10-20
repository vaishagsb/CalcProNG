import { Component } from '@angular/core';

@Component({
  selector: 'app-homeloanemicalculator',
  templateUrl: './homeloanemicalculator.component.html',
  styleUrls: ['./homeloanemicalculator.component.css']
})
export class HomeLoanEmiCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTenure: number = 0;

  emi: number | null = null;
  totalInterest: number = 0;
  totalPayment: number = 0;

  calculateEMI() {
    if (this.loanAmount && this.interestRate && this.loanTenure) {
      // Convert interest rate from annual to monthly and loan tenure to months
      const monthlyInterestRate = this.interestRate / 12 / 100;
      const numberOfMonths = this.loanTenure * 12;

      // EMI calculation formula
      this.emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
                 (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

      // Total payment and interest calculations
      this.totalPayment = this.emi * numberOfMonths;
      this.totalInterest = this.totalPayment - this.loanAmount;
    }
  }
}
