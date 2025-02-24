import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}/products`;

  private http = inject(HttpClient);

  product = signal<Product>;
  products = signal<Product[]>([]);
  searchProduct = signal<string>('');
  productsSearched = computed(() => {
    const str = this.searchProduct().toLowerCase();
    if (str == '') {
      return this.products();
    }
    return this.products().filter((product) =>
      product.name.toLowerCase().includes(str)
    );
  });

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        tap((products) => {
          this.products.set(products);
        })
      )
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  addProduct(productRequest: Product): Observable<any> {
      return this.http.post(this.apiUrl, productRequest, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() => {
          const newProducts = this.products().filter((product) => product.id !== id);
          this.products.set(newProducts);
        }),
        catchError((error) => {
          throw error;
        })
      )
  }


}
