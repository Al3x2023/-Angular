import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  count: number = 0;
  step: number = 1;
  private readonly STORAGE_KEY = 'counter-value';

  ngOnInit(): void {
    this.loadCounterValue();
  }

  private loadCounterValue(): void {
    const savedValue = localStorage.getItem(this.STORAGE_KEY);
    if (savedValue !== null) {
      this.count = parseInt(savedValue, 10);
    }
  }

  private saveCounterValue(): void {
    localStorage.setItem(this.STORAGE_KEY, this.count.toString());
  }

  increment(): void {
    this.count += this.step;
    this.saveCounterValue();
  }

  decrement(): void {
    this.count -= this.step;
    this.saveCounterValue();
  }

  reset(): void {
    this.count = 0;
    this.saveCounterValue();
  }

  setStep(newStep: number): void {
    this.step = newStep;
  }

  multiplyByTwo(): void {
    this.count *= 2;
    this.saveCounterValue();
  }

  divideByTwo(): void {
    this.count = Math.floor(this.count / 2);
    this.saveCounterValue();
  }
}
