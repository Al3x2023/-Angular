import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CounterComponent } from './pages/counter/counter.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { EduUTVTPageComponent } from './pages/edu-utvt/edu-utvt.page.component';
import { PipesPageComponent } from './pages/pipes/pipes.page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'attribute-directives', component: AttributeDirectivesPageComponent },
  { path: 'data-binding', component: DataBindingPageComponent },
  { path: 'edu-utvt', component: EduUTVTPageComponent },
  { path: 'pipes', component: PipesPageComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route para rutas no encontradas
];
