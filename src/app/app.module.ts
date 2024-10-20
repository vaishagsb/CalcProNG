import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScientificCalculatorComponent } from './scientific-calculator/scientific-calculator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import { IncomeTaxCalculatorComponent } from './taxcalculator/taxcalculator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // for mat-option
import { FormsModule } from '@angular/forms';
import { BmiCalculatorComponent } from './bmicalculator/bmicalculator.component';
import { HomeLoanEmiCalculatorComponent } from './homeloanemicalculator/homeloanemicalculator.component';
import { PersonalLoanCalculatorComponent } from './personalloancalculator/personalloancalculator.component';
import { FixedDepositCalculatorComponent } from './fixeddepositcalculator/fixeddepositcalculator.component';
import { CurrencyConverterComponent } from './currencyconverter/currencyconverter.component';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GstCalculatorComponent } from './gstcalculator/gstcalculator.component';
import { RetirementSavingsCalculatorComponent } from './retirementsavingscalculator/retirementsavingscalculator.component';
import { CalorieCalculatorComponent } from './caloriecalculator/caloriecalculator.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    ScientificCalculatorComponent,
    DigitalClockComponent,
    CategoriesHomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    IncomeTaxCalculatorComponent,
    BmiCalculatorComponent,
    HomeLoanEmiCalculatorComponent,
    PersonalLoanCalculatorComponent,
    FixedDepositCalculatorComponent,
    CurrencyConverterComponent,
    GstCalculatorComponent,
    RetirementSavingsCalculatorComponent,
    CalorieCalculatorComponent,
    FeaturesComponent,
    AboutusComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    MatGridListModule,
    HttpClientModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
