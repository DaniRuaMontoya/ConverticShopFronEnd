import { Component, OnInit } from '@angular/core';
import { RegistroRequest, RegistroResponse, TipoDocumento} from '../model/usuario-model';
import { UsuarioService } from '../service/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    
    documento: number = 0;
    nombres: string = "";
    apellidos: string = "";
    email: string = "";
    contrasena: string = "";
    confirmarContrasena: string = "";
    tiposDocumentos: TipoDocumento[] = [];
    tipoDocumentoSeleccionado!: TipoDocumento;
  
    constructor(private servicio: UsuarioService){

    }
    
    ngOnInit(){ 
      this.tiposDocumentos = [
        {
          id: 1,
          nombre: 'Cédula de Ciudadanía'
        },
        {
          id: 2,
          nombre: 'Cédula de Extranjería'
        }
        
      ]
    }

  enviarFormulario(){
    if(this.contrasena !== this.confirmarContrasena){
      alert("Las contraseñas no coinciden");
      return;
    }

    const usuario: RegistroRequest = {  //armado de objeto

      tipoDocumento: this.tipoDocumentoSeleccionado.id,
      documento: this.documento,
      nombres: this.nombres,
      apellidos: this.apellidos,
      correoElectronico: this.email,
      contrasena: this.contrasena,
      confirmarContrasena: this.confirmarContrasena,
      
    }
    
    this.servicio.registerUser(usuario).subscribe( // objeto que se le envía al backend, consumo
      (response: RegistroResponse)=>{
        alert(response.mensaje);
        this.limpiarFormulario();

      },
      (error)=>{
        alert('Hubo un error al guardar el registro');
      }
      
    );


  }
   limpiarFormulario(){
    
    this.documento = 0;
    this.nombres  = "";
    this.apellidos  = "";
    this.email  = "";
    this.contrasena  = "";
    this.confirmarContrasena  = "";
    this.tipoDocumentoSeleccionado! ;

   }


}
