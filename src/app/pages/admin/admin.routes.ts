import { Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminProductComponent } from "./admin-product/admin-product.component";
import { AdminCategoryComponent } from "./admin-category/admin-category.component";


export const routes: Routes = [
    {
        path: "",
        component: AdminHomeComponent,
        title: "Accueil Admin"
    },
    {
        path: "products",
        component: AdminProductComponent,
        title: "Gestion des produits"
    },
    {
        path: "categories",
        component: AdminCategoryComponent,
        title: "Destion des catégories"
    }
]