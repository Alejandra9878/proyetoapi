import { Component, Injectable, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';
import { Product } from '../clases/Product';
@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit{

  edit(id:number, title:string){
    console.log(id)
    console.log(title)
  }

  delete(){
    console.log("borrando")
  }
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
    this.servicio.getProduct().subscribe((data:any) => { 
      console.log(data)
      data.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        
        let imageNoGarbage = imageStringify
        
        
        .substring(2, imageStringify.length - 2)
        
        
        .replaceAll('\\', ' ')
        
        
        .replaceAll('""', '"')
        
        
        .replaceAll('" "', '"')
        
        
        .replaceAll(' ', '');
        
        
        try {
        
        
        item.images = JSON.parse(imageNoGarbage);
        
        
        item.imagesActual = item.images[0];
        
        
        } catch (e) {}
        })
      this.info = data

     
    })
    
  }

}
