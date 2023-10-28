import { Injectable } from '@angular/core';
interface Product {
  id: number
  title: string,
  image: string,
  description: string,
  price: number,
  rating: number
}
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  cartData:Product[]=[];
  price=0;
  constructor() { }
  productdetails = [
    {
      "id": 1,
      "title": "Apple iPhone 13 (256 GB) - Green",
      "image": "https://m.media-amazon.com/images/I/315vs3rLEZL._SY445_SX342_QL70_FMwebp_.jpg",
      "description": "IOS 14 | 5G | 15 cm (6.1-inch) Super Retina XDR display",
      "price": 60999,
      "rating": 4.6
    },
    {
      "id": 2,
      "title": "boAt Ultima Call Max Smart Watch",
      "image": "https://m.media-amazon.com/images/I/61xWEQ4ZTFL._SX679_.jpg",
      "description": "Big HD Display, Advanced BT Calling, 100+ Sports Modes, 10 Days Battery Life, Multiple Watch Faces",
      "price": 1199,
      "rating": 4.44
    }
  ]

  addProduct(product: Product) {
    let tempProduct = {
      id: this.productdetails.length + 1,
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
      rating: product.rating
    }
    this.productdetails.push(tempProduct);
  }

  updateProduct(product: Product, id: number) {
    let idx = this.productdetails.findIndex(b => b.id == id);
    this.productdetails[idx].title = product.title;
    this.productdetails[idx].image = product.image;
    this.productdetails[idx].description = product.description;
    this.productdetails[idx].price = product.price;
    this.productdetails[idx].rating = product.rating;
  }



}
