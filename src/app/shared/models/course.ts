export type Level = 'Basico' | 'Intermedio' | 'Avanzado';

export interface Course {
  id: string;
  name: string;
  duration: number; // horas
  level: Level;
  cuatrimestre: number;
}