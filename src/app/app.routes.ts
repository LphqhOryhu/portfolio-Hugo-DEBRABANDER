import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/portfolio', component: ProjectsComponent, data: { projectType: 'portfolio' } },
  { path: 'projects/assuranceplus', component: ProjectsComponent, data: { projectType: 'assuranceplus' } },
  { path: 'projects/easysave', component: ProjectsComponent, data: { projectType: 'easysave' } },
  { path: 'projects/recherche-operationnel', component: ProjectsComponent, data: { projectType: 'recherche-operationnel' } },
  { path: 'projects/gestionstage', component: ProjectsComponent, data: { projectType: 'gestionstage' } },
  { path: 'projects/timetrack', component: ProjectsComponent, data: { projectType: 'timetrack' } },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];
