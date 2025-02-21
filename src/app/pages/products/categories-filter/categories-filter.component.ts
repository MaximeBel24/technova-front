import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-categories-filter',
  imports: [FormsModule],
  templateUrl: './categories-filter.component.html',
  styleUrl: './categories-filter.component.scss',
})
export class CategoriesFilterComponent implements OnInit {
  private categoryService = inject(CategoryService);
  categories = this.categoryService.categories;

  // filterCategorie: Category = ;

  ngOnInit() {
    console.log(this.categories);
    this.categoryService.getAll().subscribe();
    this.selectedCategorie.emit(this.valueCategory); // Émettre la valeur par défaut au chargement
  }
  valueCategory: string = 'Toutes les catégories';
  @Output() selectedCategorie: EventEmitter<string> = new EventEmitter();
}
