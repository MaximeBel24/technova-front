import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { error } from 'console';
import { CartService } from '../../../core/services/cart.service';
import { AccountService } from '../../../core/services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 1;
  userId: number | null = null;

  private readonly cartService = inject(CartService);
  private readonly accountService = inject(AccountService);

  private snackBar = inject(MatSnackBar);
  readonly route = inject(ActivatedRoute);
  readonly productService = inject(ProductService);
  readonly productId = Number(this.route.snapshot.paramMap.get('id'));
  readonly productResponse = toSignal(
    this.productService.getProductById(this.productId).pipe(
      map((value) => ({ value, error: undefined })),
      catchError((error) => of({ value: undefined, error }))
    )
  );

  readonly router = inject(Router);

  readonly loading = computed(() => !this.productResponse());

  readonly error = computed(() => this.productResponse()?.error);

  readonly product = computed(() => this.productResponse()?.value);

  ngOnInit(): void {
    this.userId = this.accountService.getUserId();
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    this.quantity--;
  }

  addProductToCart() {
    this.cartService
      .addProductToCart(this.userId, this.productId, this.quantity)
      .subscribe(
        (response) => {
          this.snackBar.open('Produit ajouter au panier', 'Fermer', {
            duration: 5000,
          });
        },
        (error) => {
          this.snackBar.open(
            "Une erreur s'est produite. Veuillez réessayer",
            'Close',
            {
              duration: 5000,
              panelClass: 'error-snackbar',
            }
          );
        }
      );
  }
}
