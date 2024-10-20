import { Component } from '@angular/core';

@Component({
  selector: 'app-retirementsavingscalculator',
  templateUrl: './retirementsavingscalculator.component.html',
  styleUrls: ['./retirementsavingscalculator.component.css']
})
export class RetirementSavingsCalculatorComponent {
  currentSavings: number = 0;
  annualReturn: number = 0;
  yearsUntilRetirement: number = 0;
  desiredCorpus: number = 0;
  savingsNeeded: number | null = null;

  calculateSavings() {
    // Convert annual return rate from percentage to decimal
    const r = this.annualReturn / 100;
    const n = this.yearsUntilRetirement;

    // Future value of current savings
    const futureValue = this.currentSavings * Math.pow((1 + r), n);

    // Calculate the required annual savings
    this.savingsNeeded = (this.desiredCorpus - futureValue) / ((Math.pow((1 + r), n) - 1) / r);
    
    if (this.savingsNeeded < 0) {
      this.savingsNeeded = 0; // If savings needed is negative, set it to 0
    }
  }
}
