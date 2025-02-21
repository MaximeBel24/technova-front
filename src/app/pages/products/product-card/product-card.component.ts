import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../../core/model/product.interface';
import { StorageService } from '../../../core/services/storage.service';
import { ProductService } from '../../../core/services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{


  @Input() product: Product = {} as Product;

  
  isAdmin: boolean = true;

  ngOnInit(): void {
    this.updateUserStatus();
  }

  updateUserStatus() {
      this.isAdmin = StorageService.isAdminLoggedIn();
  
    }

}
