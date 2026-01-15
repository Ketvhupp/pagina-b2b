import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home'
import { Roma } from './pages/roma/roma';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'roma', component: Roma }
=======
import { authMatchGuard } from './auth-match.guard';
import { guestMatchGuard } from './guest-match.guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./components/login/login').then(m => m.Login) },

    {
        path: '',
        canActivate: [authMatchGuard],
        children: [
            { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
            { path: 'roma', loadComponent: () => import('./pages/roma/roma').then(m => m.Roma) },
            { path: 'carrito', loadComponent: () => import('./components/carrito/carrito').then(m => m.Carrito) },
            { path: '', pathMatch: 'full', redirectTo: 'home' },
        ]
    },

    { path: '**', redirectTo: '' }
>>>>>>> 62fe170 (ruleta, corrección promociones y wallet)
];

