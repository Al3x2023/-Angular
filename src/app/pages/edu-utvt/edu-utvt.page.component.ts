import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course, Level } from '../../shared/models/course';
import { CoursesListComponent } from './parts/courses-list.component';
import { CourseFormComponent } from './parts/course-form.component';

const STORAGE_KEY = 'edu-utvt:courses';

@Component({
  selector: 'app-edu-utvt-page',
  standalone: true,
  imports: [CommonModule, CoursesListComponent, CourseFormComponent],
  templateUrl: './edu-utvt.page.component.html',
  styleUrl: './edu-utvt.page.component.css'
})
export class EduUTVTPageComponent {
  // Estado principal con Signals
  courses = signal<Course[]>(this.loadInitialCourses());
  selectedCourseId = signal<string | null>(null);

  // Derivados
  selectedCourse = computed(() => {
    const id = this.selectedCourseId();
    return id ? this.courses().find(c => c.id === id) ?? null : null;
  });

  totalCourses = computed(() => this.courses().length);

  // Persistencia automática
  persistEffect = effect(() => {
    const data = JSON.stringify(this.courses());
    localStorage.setItem(STORAGE_KEY, data);
  });

  // Acciones
  selectCourse(course: Course | null) {
    this.selectedCourseId.set(course ? course.id : null);
  }

  saveCourse(course: Partial<Course>) {
    if (course.id) {
      // Actualización
      this.courses.update(list => list.map(c => c.id === course.id ? { ...c, ...course, id: course.id! } : c));
    } else {
      // Creación
      const id = cryptoRandomId();
      const newCourse: Course = { id, name: course.name!, duration: course.duration!, level: course.level!, cuatrimestre: course.cuatrimestre! };
      this.courses.update(list => [newCourse, ...list]);
    }
    this.selectCourse(null);
  }

  deleteCourse(course: Course) {
    this.courses.update(list => list.filter(c => c.id !== course.id));
    if (this.selectedCourseId() === course.id) this.selectCourse(null);
  }

  // Carga inicial
  private loadInitialCourses(): Course[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Course[];
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    // Seed de ejemplo
    return [
      { id: cryptoRandomId(), name: 'Angular Básico', duration: 20, level: 'Basico', cuatrimestre: 1 },
      { id: cryptoRandomId(), name: 'Angular Intermedio', duration: 30, level: 'Intermedio', cuatrimestre: 2 },
    ];
  }
}

function cryptoRandomId(): string {
  // Fallback simple si no existe crypto
  try {
    const bytes = new Uint8Array(8);
    (window.crypto || (window as any).msCrypto).getRandomValues(bytes);
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return Math.random().toString(36).slice(2, 10);
  }
}