import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cuadrocerrarsesion',
  templateUrl: './cuadrocerrarsesion.component.html',
  styleUrls: ['./cuadrocerrarsesion.component.css']
})
export class CuadrocerrarsesionComponent implements OnInit {

  constructor(private shared:SharedserviceService,private router:Router) { }

  ngOnInit(): void {
    // @ts-ignore

  }

  cerrarWSesion(){
    localStorage.removeItem("token");
    window.location.replace("https://distribuidoramaroishi.vercel.app/");
    //location.reload();
    this.shared.usuarioLogerado(false);
    
  }

  navegarPerfil(){

    this.router.navigate(["/perfil"]);
  }

}
