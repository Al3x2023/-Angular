import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribute-directives-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directives-page.component.html',
  styleUrl: './attribute-directives-page.component.css'
})
export class AttributeDirectivesPageComponent {
  title = 'Directivas de Atributo';
  
  // Using signals for reactive state management
  state = signal<'active' | 'error' | 'neutral'>('neutral');
  message = signal('Estado neutral - Selecciona un botón para cambiar el estado');

  setActive() {
    this.state.set('active');
    this.message.set('¡Estado activo! Todo está funcionando correctamente.');
  }

  setError() {
    this.state.set('error');
    this.message.set('¡Error detectado! Algo ha salido mal en el sistema.');
  }

  setNeutral() {
    this.state.set('neutral');
    this.message.set('Estado neutral - Selecciona un botón para cambiar el estado');
  }
}