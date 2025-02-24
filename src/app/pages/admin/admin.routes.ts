import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AddProductComponent } from './admin-product/add-product/add-product.component';
import { UpdateProductComponent } from './admin-product/update-product/update-product.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    title: 'Accueil Admin',
  },
  {
    path: 'products',
    // component: AdminProductComponent,
    children: [
        {
            path: '',
            component: AdminProductComponent,
            title: 'Gestion des produits',
        },
        {
            path: 'add',
            component: AddProductComponent,
            title: "Ajouter un produit"
        },
        {
            path: 'update/:id',
            component: UpdateProductComponent,
            title: "Mise à jour du produit"
        }
    ]
  },
  {
    path: 'categories',
    component: AdminCategoryComponent,
    title: 'Destion des catégories',
  },
];
