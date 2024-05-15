import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      images: new FormControl('', [Validators.required]),
    })

  }
postMethod() {
  const datos: Product = {
    title: this.datosUsuario.value.title,
    price: this.datosUsuario.value.price,
    description: this.datosUsuario.value.description,
    categoryId: this.datosUsuario.value.categoryId,
    images: [this.datosUsuario.value.images]
  };   


  console.log(datos)

this.servicio.postProduct(datos).subscribe((data: any) => {
  console.log(data.id);
  this.router.navigate(['/inicio']);
      });
  }
}
