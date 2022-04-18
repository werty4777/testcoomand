import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly leer:Renderer2,private sharedservice:SharedserviceService,private router:Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

  }
  mformulario(){


      this.Login=true;
      this.Carrito=false;
    this.perfilpopup=true;




  }
  qformulario(){
    this.Login=false;
    this.perfilpopup=false;


  }
  mcarrito(){
    this.Carrito=true;
    this.Login=false;
  }

  datacarrito:any[]=[];

  datausuario:any[]=[];

  perfilpopup:boolean=false;

  ngOnInit(): void {
    this.sharedservice.Active.subscribe(value => {

      this.EstadoLogin=value;
    });

    const token=localStorage.getItem("token");


this.sharedservice.cuadroperfilob.subscribe(value => {
  this.perfilpopup=value;
})


    this.sharedservice.usuariologeado.subscribe(value => {

      this.logeado=value;


    })
    this.sharedservice.datausuariodd.subscribe(value => {
      this.datausuario=value;
    })

    this.sharedservice.usuarioLogerado(token!=undefined);



  }

  logeado:boolean=false;

  skrol(event:any){
      console.log(event)
    const skroltop=event.target.scrollingElement.scrollTop;
      if (skroltop>25){
        this.leer.addClass(this.empuja.nativeElement,"cssempuja")


      }
      if(skroltop<25){
        this.leer.removeClass(this.empuja.nativeElement,"cssempuja")
      }
  }
  @ViewChild("head") empuja!:ElementRef;
Login:boolean=false;
Registro:boolean=false;
Carrito:boolean=false;
Busqueda:string="";
  EstadoLogin:boolean=false

  buscarProductos() {


    const data=this.Busqueda;
    const navigationExtras: NavigationExtras = {state: { categoria: 0,sub:data }};
    this.router.navigate(["/Productos/search"+data],navigationExtras);


  }
}

