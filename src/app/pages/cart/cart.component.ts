import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { StorageService } from '../../core/services/storage.service';
import { AccountService } from '../../core/services/account.service';
import { CartProduct } from '../../core/model/cart/cart-product.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  imports: [FormsModule, CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  userId: number | null = null;

  private readonly cartService = inject(CartService);
  private readonly accountService = inject(AccountService);
  private snackBar = inject(MatSnackBar);

  cartProducts: any[] = []; // Stocke les produits du panier

  ngOnInit(): void {
    this.userId = this.accountService.getUserId();
    this.cartService.getCartByUserId(this.userId).subscribe((cart) => {
      this.cartProducts = cart.cartProducts;
    });
  }

  // Calculer le prix total
  getTotalPrice(): number {
    return this.cartProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  // Supprimer un article du panier
  removeFromCart(productId: number) {
    this.cartService.removeProductFromCart(this.userId, productId).subscribe(
      (response) => {
        this.snackBar.open('Produit supprimer du panier', 'Fermer', {
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
    window.location.reload();
  }
}
