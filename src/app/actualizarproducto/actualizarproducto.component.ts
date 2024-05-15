import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../clases/Product';
import { ServicService } from '../servic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPut } from '../clases/Productput';
@Component({
  selector: 'app-actualizarproducto',
  templateUrl: './actualizarproducto.component.html',
  styleUrls: ['./actualizarproducto.component.css']
})
export class ActualizarproductoComponent {
  datosUsuario: FormGroup
  idUsuario: number = 0

  constructor(private servicio: ServicService, private fb: FormBuilder, private router:Router, private route: ActivatedRoute ){
    this.datosUsuario = this.fb.group({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      images: new FormControl('', [Validators.required]),
    })

this.route.params.subscribe((value) => {
  console.log(value)
  this.idUsuario = value['id']
})

  
}
Actualizar() {
  const datos: ProductPut = {
    id: this.datosUsuario.value.id,
    title: this.datosUsuario.value.title,
    price: this.datosUsuario.value.price,
  };   


  console.log(datos)

this.servicio.putProduct(datos.title,datos.price,this.idUsuario).subscribe((data: any) => {
  console.log(data.id);
  this.router.navigate(['/inicio']);
      });
  }


}
