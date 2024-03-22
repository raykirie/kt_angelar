import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public productsService = inject(ProductService)
  public selectedCategory: string = '';

  public filteredProducts: any[];
  
  ngOnInit(): void {
    this.productsService.productFetch().then(() => {
       this.productsService.products;
    });
  }
 
}
