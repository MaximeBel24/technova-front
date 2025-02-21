import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private apiUrl = `${environment.apiUrl}/category`;
  
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
  

}
