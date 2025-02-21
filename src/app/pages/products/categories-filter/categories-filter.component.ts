import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories-filter',
  imports: [FormsModule],
  templateUrl: './categories-filter.component.html',
  styleUrl: './categories-filter.component.scss',
})
export class CategoriesFilterComponent {
  propCategories: string[] = [
    'Toutes les catégories',
    'Ordinateur',
    'Smartphones',
    'Casques Audio',
  ];
  valueCategory: string = 'Toutes les catégories';
  @Output() selectedCategorie: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.selectedCategorie.emit(this.valueCategory); // Émettre la valeur par défaut au chargement
  }
}
