import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.interface';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private apiUrl = `${environment.apiUrl}/categories`;
  
    private http = inject(HttpClient);
  
    categories = signal<Category[]>([]);

  
    getAll(): Observable<Category[]> {
      return this.http.get<Category[]>(this.apiUrl)
        .pipe(
          tap((categories) => {
            this.categories.set(categories);
          })
        )
    }

      delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`)
          .pipe(
            tap(() => {
              const newCategories = this.categories().filter((category) => category.id !== id);
              this.categories.set(newCategories);
            }),
            catchError((error) => {
              throw error;
            })
          )
      }
  
}
