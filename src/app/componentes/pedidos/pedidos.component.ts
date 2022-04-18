import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../../services/autenticacion.service";
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private readonly usuarioService:AutenticacionService) { }

  datapedidos:any[]=[];

  ngOnInit(): void {
    this.usuarioService.cargarPedidos().subscribe((value:any) => {
      this.datapedidos = value;

    })
  }

}
