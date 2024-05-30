import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'ingresar', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'alumno/:id', component:DetalleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
