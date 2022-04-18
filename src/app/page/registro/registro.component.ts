import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class RegistroComponent implements OnInit {
      cualquiera:string="";
      valores:any=1;
      password:any;
      mascara:any="" ;

  constructor(private autenticar:AutenticacionService) { }
  registrar(nombre:string,apellido:string,DNI:string,Correo:string,Telefono:string,Password:string){
    this.autenticar.Registrar(nombre,apellido,DNI,Correo,Telefono,Password).subscribe((value:any) => {

      try {
        alert(value.Message);
      }catch (e) {

        alert(e);
      }

    })
  }
  ngOnInit(): void {
    window.scrollTo(0, 0)
      }
    tecla(pulsada:any){

      this.cualquiera=pulsada.target.value;

    }
    validaciones(){
      if(this.cualquiera.length<=0){
        return"ng-invalid ng-dirty";
      }else {
        return "";
      }
      }
      cambioselect(valores:any){

      }


}

