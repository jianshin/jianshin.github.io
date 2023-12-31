import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
    },
    {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    },
    {
    path: 'projects',
    title: 'Projects',
    component: ProjectsComponent,
    },
    {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
    },
];
