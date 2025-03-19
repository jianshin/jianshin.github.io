import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
    path: '',
    title: 'Home',
    component: HomeComponent,
    },
    {
    path: 'projects',
    title: 'Projects',
    component: ProjectsComponent,
    },
];
