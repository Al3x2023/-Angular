import { Component, effect, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course, Level } from '../../../shared/models/course';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  course = input<Course | null>(null);
  save = output<Omit<Course, 'id'> & Partial<Pick<Course, 'id'>>>();
  cancel = output<void>();

  name = signal('');
  duration = signal<number>(1);
  level = signal<Level>('Basico');
  cuatrimestre = signal<number>(1);

  // Sincroniza el formulario cuando cambia el curso seleccionado
  courseSync = effect(() => {
    const c = this.course();
    if (c) {
      this.name.set(c.name);
      this.duration.set(c.duration);
      this.level.set(c.level);
      this.cuatrimestre.set(c.cuatrimestre);
    } else {
      this.name.set('');
      this.duration.set(1);
      this.level.set('Basico');
      this.cuatrimestre.set(1);
    }
  });

  onSubmit() {
    // Validación: duración mínima 1 hora y nombre requerido
    if (!this.name() || this.duration() < 1) {
      return;
    }
    const payload: Omit<Course, 'id'> & Partial<Pick<Course, 'id'>> = {
      id: this.course()?.id,
      name: this.name(),
      duration: this.duration(),
      level: this.level(),
      cuatrimestre: this.cuatrimestre(),
    };
    this.save.emit(payload);
  }

  onCancel() { this.cancel.emit(); }
}