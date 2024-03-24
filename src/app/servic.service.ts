import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './clases/Product';
@Injectable({
  providedIn: 'root'
})
export class ServicService {

  constructor(private http: HttpClient) { }
  URL = 'https://api.escuelajs.co/api/v1';
  event:any

  //Al parecer debo poner 470 para poder ver los productos creados(Como son muchos)
  getProduct(){
    return this.http.get(`${this.URL}/products?offset=0&limit=20`);
  }
deleteProduct(product: Product, id:number){
  return this.http.delete(`${this.URL}/products/${id}`)
  }
postProduct(product:Product){
  console.log(product)
  console.log(product.images)
  return this.http.post(`${this.URL}/products/`, product);
  }
}
