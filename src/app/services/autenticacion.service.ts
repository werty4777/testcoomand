import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private readonly http: HttpClient) {
  }

  Loguear(user: string, password: string) {
    const datos = {
      email: user,
      password: password

    }

    return this.http.post(environment.urlbackend + "account/login", datos)

  }

  Registrar(nombre: string, apellido: string, DNI: string, Correo: string, Telefono: string, Password: string) {
    const data = {

      "user": {

        "email": Correo,
        "password": Password,

      },
      "profile": {

        "name": nombre,
        "last_name": apellido,
        "Dni": DNI,
        "photo": "",
        "province": "",
        "address": "",
        "phone": Telefono,

      }
    }
    return this.http.post(environment.urlbackend + "account/register", data)
  }


  cargarPerfilUsuario() {

    return this.http.get(environment.urlbackend + "account/user");
  }

  cargarPedidos() {
    return this.http.get(environment.urlbackend + "pedidos/api/order");
  }


  enviarCorreo(para: string, nombre: string, cuerpo: string) :Observable<any>{


    return this.http.post(environment.urlbackend + "account/correoconsulta", {

      para: para,
      nombre: nombre, cuerpo: cuerpo

    });
  }
}


