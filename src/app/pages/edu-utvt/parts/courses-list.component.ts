import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../shared/models/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  courses = input<Course[]>([]);

  select = output<Course>();
  remove = output<Course>();

  onSelect(course: Course) { this.select.emit(course); }
  onRemove(course: Course) { this.remove.emit(course); }
}