import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.interface';
import { Category } from '../model/category.interface';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[]  {
    if (!category) return products;
    return products.filter((product) => product.categoryName === category);
  }

}
