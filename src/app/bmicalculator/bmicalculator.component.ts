import { Component } from '@angular/core';

@Component({
  selector: 'app-bmicalculator',
  templateUrl: './bmicalculator.component.html',
  styleUrls: ['./bmicalculator.component.css']
})
export class BmiCalculatorComponent {
  height!: number; // Height in centimeters
  weight!: number; // Weight in kilograms
  bmi!: number;    // Calculated BMI
  bmiStatus!: string; // BMI Status (Underweight, Normal, etc.)

  // Method to calculate BMI
  calculateBMI() {
    if (this.height && this.weight) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);

      // Determine BMI status
      if (this.bmi < 18.5) {
        this.bmiStatus = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.bmiStatus = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.bmiStatus = 'Overweight';
      } else {
        this.bmiStatus = 'Obese';
      }
    }
  }
}
