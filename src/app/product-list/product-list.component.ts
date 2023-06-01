import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      name: 'Iphone',
      price: 100,
      discount: 10,
      image: 'assets/product_1.jpg',
    },
    {
      name: 'Macbook',
      price: 200,
      discount: 20,
      image: 'assets/product_2.jpg',
    },
  ];
}
