import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  readonly route = inject(ActivatedRoute);
  readonly productService = inject(ProductService);
  readonly productId = Number(this.route.snapshot.paramMap.get('id'));
  readonly productResponse = toSignal(
    this.productService.getProductById(this.productId).pipe(
      map((value) => ({value, error:undefined})),
      catchError((error) => of({ value: undefined, error}))
    )
  )

  constructor() {
    console.log(this.product());
  }

  readonly router = inject(Router);

  readonly loading = computed(() => !this.productResponse());

  readonly error = computed(() => this.productResponse()?.error);

  readonly product = computed(() => this.productResponse()?.value);

}


