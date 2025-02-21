import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../../core/model/product.interface';
import { StorageService } from '../../../core/services/storage.service';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnChanges, OnInit{

  private productService = inject(ProductService);

  @Input() product: Product = {} as Product;
  @Output() deleteProduct = new EventEmitter<number>();

  
  isAdmin: boolean = true;

  ngOnInit(): void {
    // this.productService.getProductImage(this.product.id).subscribe();
    this.updateUserStatus();
  }

  updateUserStatus() {
      this.isAdmin = StorageService.isAdminLoggedIn();
  
    }
  
  

  handleDeleteProduct(id: number): void {
    this.deleteProduct.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['product']) {
      console.log('Produit modifié:', changes['product'].currentValue);
    }

    if (changes['isAdmin']) {
      console.log('Statut d\'administrateur modifié:', changes['userIsAdmin'].currentValue)
    }
  }
}
