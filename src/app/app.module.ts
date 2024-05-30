import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //incluir
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListadoModule } from './listado/listado.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CatalogoComponent,
    RegistroComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //incluir
    FormsModule, //incluir 
    HttpClientModule, //incluir
    ListadoModule,
    MatSliderModule, BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule//incluir
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
