import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: any[] = []
  public titleValue: string = ''

  public productFetch(): Promise<void> {
    return fetch('https://dummyjson.com/products?limit=50')
      .then(res => res.json())
      .then(data => {
        this.products = data.products;
      });
  }

  public computedProduct() :any[]{
      let value = this.titleValue.toLowerCase()
      return this.products.filter(el => el.title.toLowerCase().includes(value))
  }


  
}
