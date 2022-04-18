import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(private  http:AutenticacionService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  alerta(usuario:any,contra:any){

  }

  enviarCorreo(para:string,nombre:string,cuerpo:string){


    this.http.enviarCorreo(para,nombre,cuerpo).subscribe(value => {

      alert("Correo enviado")

    },error => {
      alert("Error al enviar correo")
    });

  }

}
