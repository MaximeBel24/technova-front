import { Component, effect, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CategoriesFilterComponent } from './categories-filter/categories-filter.component';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ProductFilterPipe } from '../../core/pipes/product-filter.pipe';
import { ProductCardComponent } from "./product-card/product-card.component";
import { Category } from '../../core/model/category.interface';

@Component({
  selector: 'app-products',
  imports: [CategoriesFilterComponent, SearchBarComponent, ProductFilterPipe, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  productService = inject(ProductService);
  products = this.productService.productsSearched;

  // filterCategorie: Category = ;

  constructor() {
    effect(() => {
      console.log('Produit recherché : ', this.productService.searchProduct());
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe();
  }

  removeProduct(id: number) {
    this.productService.delete(id).subscribe({
      error: (err) => {
        console.error(err);
      },
    });
  }
}
