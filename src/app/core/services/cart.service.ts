import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.interface';
import { Observable, tap } from 'rxjs';
import { Cart } from '../model/cart/cart.interface';
import { CartProduct } from '../model/cart/cart-product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;

  private http = inject(HttpClient);

  getCartByUserId(userId: number | null): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${userId}`);
  }

  removeProductFromCart(userId: number | null, productId: number){
    let requestEndPoint: string = `${this.apiUrl}/${userId}/remove/${productId}`;
    return this.http.delete<void>(requestEndPoint);
  }

  addProductToCart(userId: number | null, productId: number, quantity: number){

    return this.http.post<CartProduct>(`${this.apiUrl}/${userId}/add/${productId}?quantity=${quantity}`,{quantity});
  }
}
