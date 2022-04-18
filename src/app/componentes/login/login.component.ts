import {Component, Input, OnInit} from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {






  relacion(){
    this.sharedservice.cambioLogin(false)
    this.sharedservice.cambioRecuperar(true)

  }
  mostrar(){
    console.log("aea")
    this.sharedservice.cambioLoginActivo(true)
  }
  ocultar(){
    this.sharedservice.cambioLoginActivo(false)
  }
  usuario:string="";
  Login(email:any,password:any){

    this.seriviciocompleto.Loguear(email,password).subscribe((value:any) => {

      console.log(value);
      localStorage.setItem("token",value.Token);

      this.sharedservice.datausuarios(this.usuario=value.data);
      alert("Logeado")
      this.sharedservice.usuarioLogerado(true);
       location.reload();


    },error => {


      alert(error.error.details[0])

    })
  }

  constructor(private sharedservice:SharedserviceService,  private seriviciocompleto:AutenticacionService) {

  }

  ngOnInit(): void {

  }

}
