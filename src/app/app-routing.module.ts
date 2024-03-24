import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Api1Component } from './api1/api1.component';
import { CrearproductoComponent } from './crearproducto/crearproducto.component';
import { ActualizarproductoComponent } from './actualizarproducto/actualizarproducto.component';

const routes: Routes = [
  { path:'inicio', component:Api1Component },
  { path:'crearproducto', component:CrearproductoComponent},
  { path:'Actualizarproducto', component:ActualizarproductoComponent},
  { path:'', redirectTo:'inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
