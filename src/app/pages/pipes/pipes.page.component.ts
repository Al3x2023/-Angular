import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.page.component.html',
  styleUrls: ['./pipes.page.component.css']
})
export class PipesPageComponent {
  text = 'Angular Pipes Demo';

  obj = {
    course: 'Aplicaciones Web Progresivas',
    group: 'IDGS - 101 2025',
    teacher: 'Jorge Almeida Montiel',
    topics: ['Uppercase', 'Lowercase', 'Json', 'Date', 'Number', 'Currency', 'Percent']
  };

  now = new Date();
  timezoneMadrid = 'Europe/Madrid';

  num = 12345.6789;
  currencyValue = 1234.56;
  percentValue = 0.8734; // 87.34%
}