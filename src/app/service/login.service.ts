import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioRequest, UsuarioResponse } from '../model/login-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private endPoint: HttpClient) { }

  loginuser(login: UsuarioRequest): Observable<UsuarioResponse> {
    return this.endPoint.post<UsuarioResponse>('http://localhost:8081/EcommerceApp/login', login);

  }
}
