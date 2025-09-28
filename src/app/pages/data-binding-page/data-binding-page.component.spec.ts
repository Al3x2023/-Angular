import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataBindingPageComponent } from './data-binding-page.component';

describe('DataBindingPageComponent', () => {
  let component: DataBindingPageComponent;
  let fixture: ComponentFixture<DataBindingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingPageComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial tasks', () => {
    expect(component.tasks.length).toBeGreaterThan(0);
  });

  it('should add a new task', () => {
    const initialLength = component.tasks.length;
    component.newTaskName = 'Nueva tarea de prueba';
    component.addTask();
    expect(component.tasks.length).toBe(initialLength + 1);
    expect(component.tasks).toContain('Nueva tarea de prueba');
  });

  it('should not add empty task', () => {
    const initialLength = component.tasks.length;
    component.newTaskName = '';
    component.addTask();
    expect(component.tasks.length).toBe(initialLength);
    expect(component.errorMessage).toBeTruthy();
  });

  it('should not add task with less than 3 characters', () => {
    const initialLength = component.tasks.length;
    component.newTaskName = 'ab';
    component.addTask();
    expect(component.tasks.length).toBe(initialLength);
    expect(component.errorMessage).toContain('al menos 3 caracteres');
  });

  it('should delete a task', () => {
    const initialLength = component.tasks.length;
    component.deleteTask(0);
    expect(component.tasks.length).toBe(initialLength - 1);
  });

  it('should clear form', () => {
    component.newTaskName = 'Test task';
    component.errorMessage = 'Test error';
    component.clearForm();
    expect(component.newTaskName).toBe('');
    expect(component.errorMessage).toBe('');
  });
});