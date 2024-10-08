import { Routes } from '@angular/router';
import { Dashboard } from './admin/dashboard/dashboard.component';
import { Register } from './auth/register/register.component';
import { Login } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
];
