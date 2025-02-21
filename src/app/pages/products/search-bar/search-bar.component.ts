import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  searchInput: FormControl = new FormControl('');
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value) => {
      this.productService.searchProduct.set(value as string);
    });
  }
}
