import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ProducsService} from "../../services/producs.service";
import {SharedserviceService} from "../../services/sharedservice.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  displayModal:boolean=false;
  datacarousel = [
    {
      path: "assets/car11.jpg"

    },
    {

      path: "assets/car2.jpg"

    },
    {

      path: "assets/car3.jpg"

    },

     {

      path: "assets/car5.jpg"

    },
     {

      path: "assets/car6.jpg"

    }

  ]

  marketcarousel = [
    {
      path: "assets/1.jpg"

    },
    {

      path: "assets/2.jpg"

    },
    {

      path: "assets/3.jpg"

    }

  ]

  marcas = [
    {
      path: "assets/1.jpg"

    },
    {

      path: "assets/2.jpg"

    },
    {

      path: "assets/3.jpg"

    }

  ]
  marcascarousel = [
    {
      path: "assets/marcas/1.png"

    },
    {

      path: "assets/marcas/2.png"

    },
    {

      path: "assets/marcas/3.png"

    },

    {

      path: "assets/marcas/4.png"

    },
    {

      path: "assets/marcas/5.png"

    },
    {

      path: "assets/marcas/6.png"

    },
    {

      path: "assets/marcas/7.png"

    },
    {

      path: "assets/marcas/8.png"

    },
    {

      path: "assets/marcas/9.png"

    }

  ]
  paraelmouse() {
    this.leer.addClass(this.adrian.nativeElement,"galindo");
  }
  qmouse(){
    this.leer.removeClass(this.adrian.nativeElement,"galindo")
  }
  constructor(private readonly leer:Renderer2,private productService:ProducsService,private shared:SharedserviceService,private messageService: MessageService,) {

  }

  @ViewChild("nombre") adrian!:ElementRef;

  ngOnInit(): void {
    window.scrollTo(0, 0)

    this.productService.ObtenerProductos().subscribe((value:any) => {

      this.marketcarousel=value;
      this.displayModal=true;

    })

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
    this.productService.addCarrito(1,item.id).subscribe(value => {

      this.messageService.add({severity:'success', summary:'Producto agregado al carrito', detail:''});
      this.shared.dataCarritoEstablecer(null);

    });









  }

}
