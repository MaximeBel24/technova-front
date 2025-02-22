import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-admin-category',
  imports: [],
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.scss'
})
export class AdminCategoryComponent {

      categoryService = inject(CategoryService);
      categories = this.categoryService.categories;
    
    
      ngOnInit() {
        this.categoryService.getAll().subscribe();
      }
  
      deleteCategory(id: number){
        this.categoryService.delete(id).subscribe();
      }

}
