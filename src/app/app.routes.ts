import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user-dashboard',
        component: UserDashboardComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.routes)
    }
];
