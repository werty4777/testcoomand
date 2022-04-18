import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private estadoLogin = new BehaviorSubject<boolean>(false);
  estadoActual = this.estadoLogin.asObservable();
  private estadoRecuperar = new BehaviorSubject<boolean>(false);
  estadoRecuperado=this.estadoRecuperar.asObservable();

  private Loginactivo = new BehaviorSubject<boolean>(false);
  Active=this.Loginactivo.asObservable();


  private logeado = new BehaviorSubject<boolean>(false);
  usuariologeado=this.logeado.asObservable();

  private datausuario = new BehaviorSubject<any[]>([]);
  datausuariodd=this.datausuario.asObservable();


  private cuadroperfil= new BehaviorSubject<boolean>(false);
  cuadroperfilob=this.cuadroperfil.asObservable();


  private datacarrito = new BehaviorSubject<any[]>([]);
  datacarritos=this.datacarrito.asObservable();


cambiarCuadroPerfil(data:any){

  this.cuadroperfil.next(data);
}



  cambioLoginActivo(activado:boolean){
    this.Loginactivo.next(activado)
  }
  datausuarios(data:any){
    this.datausuario.next(data);
  }

  usuarioLogerado(activado:boolean){
    this.logeado.next(activado)
  }


  cambioLogin(estado:boolean){
    this.estadoLogin.next(estado)
  }
  cambioRecuperar(recuperado:boolean){
    this.estadoRecuperar.next(recuperado)
  }

  dataCarritoEstablecer(data:any){

    this.datacarrito.next(data);
  }


  constructor() { }
}
