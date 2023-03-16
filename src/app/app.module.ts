import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';

// Clases para la configuración de rutas.
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './configuracion/guardia';
import { CardComponent } from './card/card.component';
import { HomeHombresComponent } from './home-hombres/home-hombres.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeMujerComponent } from './home-mujer/home-mujer.component';




const routes:Routes= [
  
  
  { path:'registro', component:RegistroComponent},
  
  
  { path:'', redirectTo:'/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path: 'home', component:HomeComponent, canActivate:[AuthGuard]},

  { path:'', redirectTo:'/home', pathMatch: 'full' }, 
  { path:'home/hombres', component:HomeHombresComponent},

  { path:'', redirectTo:'/home', pathMatch: 'full' }, 
  { path:'home/mujer', component:HomeMujerComponent},

  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CardComponent,
    HomeHombresComponent,
    NavbarComponent,
    HomeMujerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
