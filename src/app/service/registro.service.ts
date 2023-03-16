import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroRequest, RegistroResponse } from '../model/usuario-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private endPoint: HttpClient) { }

  registerUser(usuario: RegistroRequest): Observable<RegistroResponse>{

    return this.endPoint.post<RegistroResponse>('http://localhost:8081/EcommerceApp/registro', usuario);
  }

}
