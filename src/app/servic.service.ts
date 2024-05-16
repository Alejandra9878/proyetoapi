import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './clases/Product';
import { ProductPut } from './clases/Productput';
@Injectable({
  providedIn: 'root'
})
export class ServicService {
  datos: any
  constructor(private http: HttpClient) { }
  URL = 'https://api.escuelajs.co/api/v1';
  event: any

  //Al parecer debo poner 470 para poder ver los productos creados(Como son muchos)
  getProduct() {
    return this.http.get(`${this.URL}/products?offset=0&limit=15`);
  }
  deleteProduct(product: Product, id: number) {
    return this.http.delete(`${this.URL}/products/${id}`)
  }
  postProduct(product: Product) {
    console.log(product)
    console.log(product.images)
    return this.http.post(`${this.URL}/products/`, product);
  }
  putProduct(title: string, price: number, id: number) {
    this.datos = {
      title: title,
      price: price
    }

    console.log(id)
    return this.http.put(`${this.URL}/products/${id}`, this.datos)
  }
  getOneProduct(id: number) {
    return this.http.get(`${this.URL}/products/${id}`);
  }
}
