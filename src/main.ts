// import 'zone.js/dist/zone';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { bootstrapApplication } from '@angular/platform-browser';

// @Component({
//   selector: 'my-app',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h1>Hello from {{name}}!</h1>
//     <a target="_blank" href="https://angular.io/start">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(App);
import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButton, MatInput } from '@angular/material';
@NgModule({
  declarations: [CalculatorComponent],
  imports: [BrowserModule, MatButtonModule, MatButton],
  bootstrap: [CalculatorComponent],
})
export class AppModule {}

@Component({
  selector: 'my-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: number;

  constructor(
    private button: MatButton,
    private input1: MatInput,
    private input2: MatInput
  ) {}

  ngOnInit() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  subtract() {
    this.result = this.firstNumber - this.secondNumber;
  }

  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }

  divide() {
    this.result = this.firstNumber / this.secondNumber;
  }
}
