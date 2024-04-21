// Lección 4, 5, 6:
// import { Component, OnInit } from '@angular/core';

// lección 10, 11, 12:
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{
// 10, 11, 12:
// creacion del Input que recibe del compoente padre el array de productos
@Input() product = {
  name: '',
  price: 0,
  description: '',
  inventory: 0,
  image: '',
  cantidad: 0
};

// Lección 4, 5, 6:
//Inicio objeto de producto.
//   cantidad: number = 0;

//   product = {
//     name: 'Bike',
//     price: 120,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
//   }

//   public Hola = "Hola ADSO 2694496 Noche!!!"

// Outputs:
// Lab-practica: Agregar Output:
@Output() addToCart = new EventEmitter();

// Lección 7, 8, 9:

cantidad: number = 0;

// Lección 7, 8, 9
// product = {
//   name: 'name',
//   price: 120,
//   description: 'Product Description',
//   inventory: 10,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// }

soldOut: boolean = false;

// //fin objeto de producto.
  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    if(this.cantidad < this.product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }

  removeProduct() {
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }

  // Outputs:
  // Lab - práctica: Crear Método:
  addToCartHandler() { //2. crear metodo
    if(this.cantidad > 0){ //3. validar si tiena una cantidad de producto
      this.product['cantidad'] = this.cantidad; //4. asigna la cantidad a perdir
      this.addToCart.emit(this.product); //5. enviar la informacion por el event emiter del output
    }
    return null;
  }

}