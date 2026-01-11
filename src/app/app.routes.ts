import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home'
import { Roma } from './pages/roma/roma';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'roma', component: Roma }
];
