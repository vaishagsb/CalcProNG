import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    { title: 'Income Tax Calculator', description: 'Estimate your income tax liability based on income and deductions.' },
    { title: 'Home Loan EMI Calculator', description: 'Calculate your monthly EMI for home loans.' },
    { title: 'Personal Loan Calculator', description: 'Calculate EMI and total interest on personal loans.' },
    { title: 'Fixed Deposit (FD) Calculator', description: 'Estimate maturity amount and interest earned on fixed deposits.' },
    { title: 'Currency Converter', description: 'Convert currencies based on current exchange rates.' },
    { title: 'GST Calculator', description: 'Compute GST on products and services.' },
    { title: 'Body Mass Index (BMI) Calculator', description: 'Assess your body weight in relation to height.' },
    { title: 'Retirement Savings Calculator', description: 'Plan for retirement by estimating savings needed.' },
    { title: 'Calorie Calculator', description: 'Track your daily caloric intake based on personal data.' },
    { title: 'Basic & Scientific Calculator', description: 'Perform basic and scientific calculations effortlessly.' }
  ];
}
