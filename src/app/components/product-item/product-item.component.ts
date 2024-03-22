import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() public title: string
  @Input() public price: number
  @Input() public category: string
  @Input() public thumbnail: any
  @Input() public rating: any


  getStars(): number[] {
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating - fullStars >= 0.5 ? 1 : 0;
    const totalStars = Math.ceil(this.rating);
    const stars: number[] = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(1); 
    }
  
    if (halfStar === 1) {
      stars.push(0.5); 
    }
  
    const remainingStars = totalStars - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(0); 
    }
  
    return stars;
  }
  
  
  
  
}
