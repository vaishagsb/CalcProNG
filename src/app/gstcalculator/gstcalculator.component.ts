import { Component } from '@angular/core';

@Component({
  selector: 'app-gstcalculator',
  templateUrl: './gstcalculator.component.html',
  styleUrls: ['./gstcalculator.component.css'],
})
export class GstCalculatorComponent {
  priceExcludingGST: number = 0;
  priceIncludingGST: number = 0;
  gstAmount: number = 0;
  gstRate: number = 28; // Default GST rate in %

  gstRates: { value: number, label: string }[] = [
    { value: 28, label: '28%' },
    { value: 18, label: '18%' },
    { value: 12, label: '12%' },
    { value: 5, label: '5%' },
  ];

  calculateGST() {
    // Calculate GST Amount
    this.gstAmount = (this.priceExcludingGST * this.gstRate) / 100;

    // Calculate Price Including GST
    this.priceIncludingGST = this.priceExcludingGST + this.gstAmount;
  }

  calculatePriceExcludingGST() {
    // Calculate Price Excluding GST based on price including GST
    this.priceExcludingGST = (this.priceIncludingGST * 100) / (100 + this.gstRate);
    this.gstAmount = this.priceIncludingGST - this.priceExcludingGST;
  }

  onGstRateChange() {
    this.calculateGST();
    // Reset prices and GST amount when the GST rate changes
    this.priceExcludingGST = 0;
    this.priceIncludingGST = 0;
    this.gstAmount = 0;
  }
}
