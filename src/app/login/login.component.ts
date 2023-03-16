import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioRequest, UsuarioResponse } from '../model/login-model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  email: string = "";
  contrasena: string = "";


  constructor(private servicio: LoginService, private router: Router){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  enviarFormularioLogin() {
    
  if(this.contrasena === "" || this.email === ""){
    alert("El usuario o la contraseña no pueden estar vacios front");
    return;
  }


  const login: UsuarioRequest ={ // arma objeto, deben ser iguales al campo UsuarioRequest del backend

    correoElectronico: this.email,
    contrasena: this.contrasena
  }
  

  this.servicio.loginuser(login).subscribe({
    next: (response: UsuarioResponse) =>{ // en el next enruto para el home, un if, si el autentico es true que entre al home
      if(response.auntenticado === true){
        localStorage.setItem("autenticado", response.auntenticado.toString());
        this.router.navigate(['/home']);
      }
      
      
    }, 
    error: (error) =>{
      alert(error);
    }
    
  });
  
  }



}


