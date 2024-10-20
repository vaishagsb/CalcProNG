import { Component } from '@angular/core';

@Component({
  selector: 'app-taxcalculator',
  templateUrl: './taxcalculator.component.html',
  styleUrls: ['./taxcalculator.component.css']
})
export class IncomeTaxCalculatorComponent {
  user = {
    ageGroup: 'under60' // Default Age Group
  };

  income = {
    salary: 0,
    interest: 0,
    rental: 0,
    digitalAssets: 0
  };

  deductions = {
    section80C: 0,
    section80D: 0,
    section80E: 0
  };

  resultsAvailable = false;
  oldRegimeTax = 0;
  newRegimeTax = 0;
  surcharge = 0;
  cess = 0;

  // Calculate Gross Income
  calculateGrossIncome(): number {
    return (
      this.income.salary +
      this.income.interest +
      this.income.rental +
      this.income.digitalAssets
    );
  }

  // Calculate Deductions
  calculateTotalDeductions(): number {
    return (
      this.deductions.section80C +
      this.deductions.section80D +
      this.deductions.section80E
    );
  }

  // Calculate Old Regime Tax
  calculateOldRegimeTax(income: number): number {
    if (income <= 250000) return 0;
    else if (income <= 500000) return (income - 250000) * 0.05;
    else if (income <= 1000000) return (income - 500000) * 0.20 + 12500;
    else return (income - 1000000) * 0.30 + 112500;
  }

  // Calculate New Regime Tax
  calculateNewRegimeTax(income: number): number {
    if (income <= 300000) return 0;
    else if (income <= 700000) return (income - 300000) * 0.05;
    else if (income <= 1000000) return (income - 700000) * 0.10 + 20000;
    else if (income <= 1200000) return (income - 1000000) * 0.15 + 50000;
    else if (income <= 1500000) return (income - 1200000) * 0.20 + 80000;
    else return (income - 1500000) * 0.30 + 140000;
  }

  // Calculate Surcharge
  calculateSurcharge(income: number): number {
    if (income > 50000000) return income * 0.25;
    else if (income > 20000000) return income * 0.15;
    else return 0;
  }

  // Calculate Cess
  calculateCess(tax: number): number {
    return tax * 0.04;
  }

  // Main Calculate Function
  calculateTax(): void {
    const grossIncome = this.calculateGrossIncome();
    const deductions = this.calculateTotalDeductions();
    const netTaxableIncome = grossIncome - deductions;

    // Old and New Regime Tax Calculations
    this.oldRegimeTax = this.calculateOldRegimeTax(netTaxableIncome);
    this.newRegimeTax = this.calculateNewRegimeTax(netTaxableIncome);

    // Surcharge and Cess
    this.surcharge = this.calculateSurcharge(netTaxableIncome);
    this.cess = this.calculateCess(this.oldRegimeTax);

    this.resultsAvailable = true;
  }
}
