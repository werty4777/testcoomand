import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";
import {MessageService} from "primeng/api";
import {ProducsService} from "../../services/producs.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  data:any[]=[];

  constructor(private shared:SharedserviceService,private messageService: MessageService,private productService:ProducsService) { }

  ngOnInit(): void {

    this.shared.datacarritos.subscribe(value => {
      this.productService.buscarDataCarrito().subscribe((value:any) => {
        this.data=value;
      })
    })


  }

  eliminarProducto(item:any){


  /*  const datanueva=this.data.filter(a=>{

return       a.id!=item.id;

    });

    this.shared.dataCarritoEstablecer(datanueva);
    localStorage.removeItem("datacarrito");
    localStorage.setItem("datacarrito",JSON.stringify(datanueva));*/


    this.productService.eliminarProductoCarrito(item.id_product).subscribe(value => {
      this.messageService.add({severity:'error', summary:'Producto eliminado del carrito', detail:''});

      this.productService.buscarDataCarrito().subscribe((value1:any) => {
        this.data=value1;
      })

      this.shared.dataCarritoEstablecer(null);
    })


  }

}
