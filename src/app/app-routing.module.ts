import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { HomeComponent } from './home/home.component'; // Import the HomeComponent
import { IncomeTaxCalculatorComponent } from './taxcalculator/taxcalculator.component';
import { BmiCalculatorComponent } from './bmicalculator/bmicalculator.component';
import { HomeLoanEmiCalculatorComponent } from './homeloanemicalculator/homeloanemicalculator.component';
import { PersonalLoanCalculatorComponent } from './personalloancalculator/personalloancalculator.component';
import { FixedDepositCalculatorComponent } from './fixeddepositcalculator/fixeddepositcalculator.component';
import { CurrencyConverterComponent } from './currencyconverter/currencyconverter.component';
import { GstCalculatorComponent } from './gstcalculator/gstcalculator.component';
import { RetirementSavingsCalculatorComponent } from './retirementsavingscalculator/retirementsavingscalculator.component';
import { CalorieCalculatorComponent } from './caloriecalculator/caloriecalculator.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to HomeComponent on root
  { path: 'home', component: HomeComponent }, // Route for HomeComponent
  { path: 'categories-home', component: CategoriesHomeComponent }, // Route for CategoriesHomeComponent
  { path: 'taxcalculator', component: IncomeTaxCalculatorComponent },
  { path: 'bmicalculator', component: BmiCalculatorComponent },
  { path: 'homeloanemicalculator', component: HomeLoanEmiCalculatorComponent},
  { path: 'personalloancalculator', component: PersonalLoanCalculatorComponent},
  { path: 'fixeddepositcalculator', component: FixedDepositCalculatorComponent},
  { path: 'currencyconverter', component: CurrencyConverterComponent},
  { path: 'gstcalculator', component: GstCalculatorComponent},
  { path: 'retirementsavingscalculator', component: RetirementSavingsCalculatorComponent},
  { path: 'caloriecalculator', component: CalorieCalculatorComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'aboutus', component: AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
