import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})

export class PerfilUsuarioComponent implements OnInit {
  nombre:any;
  dni:any;
  apellidos:any;
  telefono:any;
  fecha:any;
  password:any;
  passwordnew:any
  constructor(private service:AutenticacionService) { }

  data:any;

  ngOnInit(): void {

    this.service.cargarPerfilUsuario().subscribe((value:any) => {
      console.log(value);
      this.nombre=value.name;
      this.apellidos=value.last_name;
      this.telefono=value.phone;
      this.dni=value.dni;
    })
  }

}
