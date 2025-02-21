import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminGuard } from './core/guard/admin.guard';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Accueil',
  },
  {
    path: 'products',
    children: [
      {
        path:'',
        component: ProductsComponent,
        title: 'Liste des produits'
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
      }
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/admin/admin.routes').then((m) => m.routes),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page introuvable',
  },
];
