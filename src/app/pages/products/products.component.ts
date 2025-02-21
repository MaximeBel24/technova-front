import { Component, effect, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CategoriesFilterComponent } from './categories-filter/categories-filter.component';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ProductFilterPipe } from '../../core/pipes/product-filter.pipe';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products',
  imports: [CategoriesFilterComponent, SearchBarComponent, ProductFilterPipe, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  productService = inject(ProductService);
  products = this.productService.productsSearched;

  filterCategorie = '';

  constructor() {
    effect(() => {
      console.log('Produit recherché : ', this.productService.searchProduct());
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe();
  }

}
