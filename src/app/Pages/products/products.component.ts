import { Component } from '@angular/core';
import { Interface } from 'readline';
import { Productos } from '../../models/test';
import { CardComponent } from "../../Component/card/card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos: Productos[]=[
    {
      name: 'Zapatos',
      description:'Zapatos deportivos para correr',
      price: 2500.0,
      img: '/images/shoes.png',
    },
    {
      name: 'Pantalones',
      description:'Pantalones negros tipo mom jeans',
      price: 540.0,
      img: '/images/jeans.png',
    },
    {
      name: 'Sudadera',
      description:'Sudadera negra con capucho',
      price: 499.0,
      img: '/images/hoodie.jpg',
    }
  ];
}
