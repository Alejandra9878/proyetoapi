import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../clases/Product';
import { ServicService } from '../servic.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent {

  datosUsuario: FormGroup

  constructor(private servicio: ServicService, private fb: FormBuilder, private router:Router ){
    this.datosUsuario = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required]
      
    })

  }
postMethod() {
  const datos: Product = {
    title: this.datosUsuario.get('title')!.value,
    price: this.datosUsuario.get('price')!.value,
    description: this.datosUsuario.get('description')!.value,
    categoryId: this.datosUsuario.get('categoryId')!.value,
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg"]
  };   


  console.log(datos)

this.servicio.postProduct(datos).subscribe((data: any) => {
  console.log(data.id);
  this.router.navigate(['/home']);
      });
  }
}
