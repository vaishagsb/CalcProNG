import { Component } from '@angular/core';

@Component({
  selector: 'app-caloriecalculator',
  templateUrl: './caloriecalculator.component.html',
  styleUrls: ['./caloriecalculator.component.css']
})
export class CalorieCalculatorComponent {
  age: number = 0; // Default value of 0
  gender: 'male' | 'female' | null = null; // Nullable, starts as null
  weight: number = 0; // Default value of 0
  height: number = 0; // Default value of 0
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | null = null; // Nullable, starts as null
  dailyCalories: number | null = null; // Nullable, starts as null

  calculateCalories(): void {
    if (this.age && this.weight && this.height && this.gender && this.activityLevel) {
      let bmr: number;

      // Calculate Basal Metabolic Rate (BMR)
      if (this.gender === 'male') {
        bmr = 66 + (6.23 * this.weight) + (12.7 * this.height) - (6.8 * this.age);
      } else {
        bmr = 655 + (4.35 * this.weight) + (8.7 * this.height) - (4.7 * this.age);
      }

      // Adjust BMR based on activity level
      let activityMultiplier: number;
      switch (this.activityLevel) {
        case 'sedentary':
          activityMultiplier = 1.2;
          break;
        case 'light':
          activityMultiplier = 1.375;
          break;
        case 'moderate':
          activityMultiplier = 1.55;
          break;
        case 'active':
          activityMultiplier = 1.725;
          break;
        default:
          activityMultiplier = 1;
      }

      this.dailyCalories = Math.round(bmr * activityMultiplier);
    }
  }
}
