import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding-page.component.html',
  styleUrl: './data-binding-page.component.css'
})
export class DataBindingPageComponent {
  title = 'Data Binding - Gestión de Tareas';
  
  // Two-way data binding property
  newTaskName: string = '';
  
  // Error message for validation
  errorMessage: string = '';
  
  // Array to store tasks
  tasks: string[] = [];

  constructor() {
    // Initialize with some sample tasks
    this.tasks = [
      'Completar el proyecto Angular',
      'Estudiar directivas estructurales',
      'Practicar data binding'
    ];
  }

  addTask() {
    // Clear previous error message
    this.errorMessage = '';
    
    // Validate input
    if (!this.newTaskName.trim()) {
      this.errorMessage = 'Por favor ingresa un nombre para la tarea';
      return;
    }
    
    if (this.newTaskName.trim().length < 3) {
      this.errorMessage = 'El nombre de la tarea debe tener al menos 3 caracteres';
      return;
    }
    
    // Check if task already exists
    if (this.tasks.includes(this.newTaskName.trim())) {
      this.errorMessage = 'Esta tarea ya existe en la lista';
      return;
    }
    
    // Add task to the array
    this.tasks.push(this.newTaskName.trim());
    
    // Clear the input
    this.newTaskName = '';
  }

  deleteTask(index: number) {
    // Remove task from array
    this.tasks.splice(index, 1);
  }

  clearForm() {
    // Clear input and error message
    this.newTaskName = '';
    this.errorMessage = '';
  }
}