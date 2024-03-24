import { Component, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';
import { Product } from '../clases/Product';
@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit{
  info: any
  constructor(private servicio:ServicService){


  }
  eliminarProducto(producto: Product, id:number){
    try{
      this.servicio.deleteProduct(producto, id).subscribe(data => {
        console.log(data)
        location.reload()
      })
    }
    catch(err){
      console.log('Error al eliminar el producto: ', err)
    }
  }
  ngOnInit(): void {
    this.servicio.getProduct().subscribe(data => { 
      console.log(data )
      this.info = data
     
    })
    
  }

}
