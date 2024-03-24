import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../clases/Product';
import { ServicService } from '../servic.service';
import { Router } from '@angular/router';
import { ProductPut } from '../clases/Productput';
@Component({
  selector: 'app-actualizarproducto',
  templateUrl: './actualizarproducto.component.html',
  styleUrls: ['./actualizarproducto.component.css']
})
export class ActualizarproductoComponent {
  datosUsuario: FormGroup

  constructor(private servicio: ServicService, private fb: FormBuilder, private router:Router ){
    this.datosUsuario = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      id: ['', Validators.required],
      
      
    })

}
Actualizar() {
  const datos: ProductPut = {
    title: this.datosUsuario.get('title')!.value,
    price: this.datosUsuario.get('price')!.value,
    id: this.datosUsuario.get('id')!.value,
  };   


  console.log(datos)

this.servicio.putProduct(datos.title,datos.price,datos.id).subscribe((data: any) => {
  console.log(data.id);
  this.router.navigate(['/inicio']);
      });
  }


}
