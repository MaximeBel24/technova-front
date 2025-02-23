import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../core/services/category.service';
import { ProductService } from '../../../core/services/product.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  imports: [RouterLink],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss',
})
export class AdminHomeComponent implements OnInit{
  productService = inject(ProductService);
  products = this.productService.products;
  
  categoryService = inject(CategoryService);
  categories = this.categoryService.categories;
  
  
  ngOnInit(): void {
    this.productService.getAll().subscribe();
    console.log()
  }

  numberOfProducts: number = this.products.length;
  numberOfCategories: number = this.categories.length;
}
