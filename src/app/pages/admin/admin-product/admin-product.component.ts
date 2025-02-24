import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  imports: [RouterLink],
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.scss'
})
export class AdminProductComponent implements OnInit{

    productService = inject(ProductService);
    products = this.productService.products;
  
  
    ngOnInit() {
      this.productService.getAll().subscribe();
    }

    deleteProduct(id: number){
      this.productService.delete(id).subscribe();
    }

  
}
