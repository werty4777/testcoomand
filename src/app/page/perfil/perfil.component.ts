import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  index:number=0;

  constructor(private service:AutenticacionService) { }

  data:any;
  ngOnInit(): void {
    window.scrollTo(0, 0)

    this.service.cargarPerfilUsuario().subscribe((value:any) => {
      this.data=value;


    });
  }

}
