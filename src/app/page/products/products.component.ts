import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProducsService} from "../../services/producs.service";
import {ProductModel} from "../../Models/ProductModel";
// @ts-ignore
import * as datajson from '../../../assets/dataagua.json';
import {SharedserviceService} from "../../services/sharedservice.service";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data:any[]=[];

  OrdenarMP(){
    console.log("cualqueira")
  this.data=this.data.sort((a:any, b:any) => {
  return  a.unite_price - b.unite_price

})

  }
   OrdenarMQ(){
    console.log("cualqueira")
  this.data=this.data.sort((a:any, b:any) => {
  return    b.unite_price - a.unite_price

})

  }

  dataurl:any;

  constructor(private productitos:ProducsService,private shared:SharedserviceService,private messageService: MessageService,
              private activatedRoute:ActivatedRoute,private router:Router
              ) {

    this.dataurl=this.router.getCurrentNavigation()?.extras.state;

  }

  sortField: any;
  sortOrder: any;
  sortOptions: any;
  sortKey: any;
  opciones: any[]=[

    {
      name:"Sin filtro",
      code:0
    },
    {

    name:"Menor precio",
    code:1


  },
    {
      name:"Mayor precio",
      code:2
    }];
  opcionselecionada: any;


  temp:any[]=[];

  ngOnInit(): void {

    window.scrollTo(0, 0)



   try {
     if(this.dataurl.categoria!=0){
       this.productitos.cargarProductosPorUrl(this.dataurl.categoria,this.dataurl.sub).subscribe((value:any) => {

         this.data=value;
         this.temp=[...this.data];

         this.data.forEach(value1 => {

           const dattt={name:String(value1.supplier_id.company_name).toUpperCase(),code:String(value1.supplier_id.company_name).toUpperCase()};

           const datapush=[];
           datapush.push(dattt);

           this.marcas=[...datapush];

         })

       })
     }else{

       this.productitos.busquedaProductos(this.dataurl.sub).subscribe((value:any) => {

         this.data=value.data;
         this.temp=[...this.data];

         this.data.forEach(value1 => {

           const dattt={name:String(value1.supplier_id.company_name).toUpperCase(),code:String(value1.supplier_id.company_name).toUpperCase()};

           const datapush=[];
           datapush.push(dattt);

           this.marcas=[...datapush];

         })

       });
     }
   }catch (e){
      this.router.navigate(["/"]);
   }



  }



  onSortChange($event: any) {

  }

  validarDatacambio() {

    if(this.opcionselecionada==1){
      this.OrdenarMP();
    }
    if(this.opcionselecionada==2){
      this.OrdenarMQ();
    }
    if(this.opcionselecionada==0){

      this.data=[...this.temp];
    }

  }

  cajitaprecioSlider(inicio:number,fin:number){
    this.ListaPrecios1=[];
    this.ListaPrecios2=[];
    this.ListaPrecios3=[];
    this.ListaPrecios=[];


    this.data = [...this.temp];


    console.log(this.ListaPrecios)

    this.opcionselecionada==0
    let filter = this.data.filter(value => {


      return Number(value.unite_price)>=inicio && Number(value.unite_price)<=fin

    });






    this.data=filter;



  }


  cajitaprecio(inicio:number,fin:number,data:any){


    if(data==this.ListaPrecios && this.ListaPrecios.length>0){
      this.ListaPrecios1=[];
      this.ListaPrecios2=[];
      this.ListaPrecios3=[];

    }
    if(data==this.ListaPrecios1 && this.ListaPrecios1.length>0){
      this.ListaPrecios=[];
      this.ListaPrecios2=[];
      this.ListaPrecios3=[];

    }
    if(data==this.ListaPrecios2 && this.ListaPrecios2.length>0){
      this.ListaPrecios1=[];
      this.ListaPrecios=[];
      this.ListaPrecios3=[];

    }
    if(data==this.ListaPrecios3 && this.ListaPrecios3.length>0){
      this.ListaPrecios1=[];
      this.ListaPrecios2=[];
      this.ListaPrecios=[];

    }
    this.data = [...this.temp];


    console.log(this.ListaPrecios)

    this.opcionselecionada==0
    if(data.length>0){

      let filter = this.data.filter(value => {


        return Number(value.unite_price)>=inicio && Number(value.unite_price)<=fin

      });






      this.data=filter;


    }else{


      this.data = [...this.temp];

    }


  }


  datacarrito:any[]=[];
  marcasseleccionadas:any;
  Medidasseleccionadas:any;
  ListaPrecios:any[]=[];
  ListaPrecios1:any[]=[];
  ListaPrecios2:any[]=[];
  ListaPrecios3:any[]=[];
  marcas:any[]=[];
  Medidas:any[]=[

    {
      name:"1''",
      code:"1p"

    },
    {
      name:"1'' 1/4",
      code:"dos"

    },
    {
      name:"1/2''",
      code:"media"

    },
    {
      name:"2''",
      code:"dos"

    },
    {
      name:"2'' 1/2",
      code:"dosmedia"

    },
    {
      name:"3/4''",
      code:"trescuartos"

    },
    {
      name:"4''",
      code:"cuatro"

    },
    {
      name:"6''",
      code:"seis"

    },

  ]
    rangeValues: number[] = [0,500];



  cantidadProductosByPrice(preciominimo:any,preciomaximo:any){



    try {
      return this.data.filter(a=>{

      return Number(a.unite_price)>= preciominimo && Number(a.unite_price)<=preciomaximo;

    }).length;
    }catch (e) {

      console.log(e)
      return 0;
    }


  }


  agregarCarrito(item: any) {

/*    // @ts-ignore
    const datacarritosjon=JSON.parse(localStorage.getItem("datacarrito"));

    datacarritosjon.push(item);

    localStorage.removeItem("datacarrito");
    localStorage.setItem("datacarrito",JSON.stringify(datacarritosjon));


    this.shared.dataCarritoEstablecer(datacarritosjon);*/



 /*   this.productitos.buscarDataCarrito().subscribe(value => {

      console.log(value)
    })
*/
    this.productitos.addCarrito(1,item.id_product).subscribe(value => {

      this.messageService.add({severity:'success', summary:'Producto agregado al carrito', detail:''});
      this.shared.dataCarritoEstablecer(null);

    });









  }

  handleChange($event: any) {
    this.cajitaprecioSlider(this.rangeValues[0],this.rangeValues[1]);
  }

  cambioMarca() {


    if(this.marcasseleccionadas.length>0){

      const marcas=this.marcasseleccionadas.map((value:any)=>{

        return value.code;

      });


      this.data=this.temp.filter(value => {

        return marcas.includes(String(value.supplier_id.company_name).toUpperCase());


      })


    }else{

      this.data = [...this.temp];
    }

  }
}
