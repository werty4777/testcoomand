import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  logeado:boolean=false;
  interlogin:boolean=true;
  RecuLogin:boolean=false;
  constructor( private sharedservice:SharedserviceService) {
    this.sharedservice.cambioLogin(this.interlogin)
    this.sharedservice.cambioRecuperar(this.RecuLogin)
    this.sharedservice.estadoActual.subscribe(value => {this.interlogin=value})
    this.sharedservice.estadoRecuperado.subscribe(value => this.RecuLogin=value)



    this.sharedservice.usuariologeado.subscribe(a=> this.logeado=a);
  }

  ngOnInit(): void {



  }

}
