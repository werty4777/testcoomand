import {Component, OnInit} from '@angular/core';
import {ProducsService} from "../../services/producs.service";
import {SharedserviceService} from "../../services/sharedservice.service";
import {MessageService} from "primeng/api";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IPurchaseUnit, ITransactionItem} from "ngx-paypal/lib/models/paypal-models";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  displayModal: boolean=false;
  displayBasic: boolean=false;

  public payPalConfig?: IPayPalConfig;
  public showPaypalButtons: boolean=false;

  data: any[] = [];
  datatotal = 0;






  ngOnInit(): void {

    this.shared.datacarritos.subscribe(value => {
      this.cargarData();
    })

 /*   let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer apis-token-1650.3tZHE1sfBvgADtSeX2bWaEl9XM40X8zA',);


    this.http.get("https://api.apis.net.pe/v1/tipo-cambio-sunat",{
      headers:headers
    }).subscribe((value:any) => {
      this.tipoCamo=String(value.compra);

    },error => {
      console.log(error)
    })*/


  }

  cargarConfigPaypal(productos:IPurchaseUnit[]){
    this.payPalConfig = {
      currency: "USD",
      clientId: "AXWL51vtvRvKSoaOYe4b9iq6g64ed2D2Yni8ZnbaS9i5tzxIF1FP9qRzFWX408pBfGTkH0EBzcFym6D9",
      createOrderOnClient: (data:any) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: productos
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data:any, actions:any) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );

        alert("Esta es una prueba de pago Gracias.")

        actions.order.get().then((details:any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data:any) => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
      },
      onCancel: (data:any, actions:any) => {

      },
      onError: (err:any) => {
        console.log(err)
      },
      onClick: (data:any, actions:any) => {

      }
    };
  }


  cargarData() {
    this.service.buscarDataCarrito().subscribe((value: any) => {

      this.data = value;
      if(this.data.length==0){
        this.showPaypalButtons=true;
      }else{
        this.showPaypalButtons=false;
      }

      this.totalProductos();

    })
  }

  eliminarCarritoProducto(item: any) {
    this.service.eliminarProductoCarrito(item.id_product).subscribe(value => {
      this.messageService.add({severity: 'error', summary: 'Producto eliminado del carrito', detail: ''});

      this.shared.dataCarritoEstablecer(null);
      this.cargarData();

    })
  }

  disminuir(item: any) {



    if ((item.quantity - 1) <= 0) {
      this.service.eliminarProductoCarrito(item.id_product).subscribe(value => {
        this.cargarData();
        this.shared.dataCarritoEstablecer(null);
        this.totalProductos();
      });
    } else {
      this.service.cambiarValores(-1, item.id_product).subscribe(value => {
        this.cargarData();
      })
    }


  }

  aumentar(item: any) {


    this.service.cambiarValores(1, item.id_product).subscribe(value => {
      this.cargarData();
    })

  }

  totalProductos() {

    this.datatotal = 0;

    this.data.forEach(value => {

      this.datatotal += (Number(Number(value.unite_price).toFixed(2)) * value.quantity);
      console.log(this.datatotal)

    })


  }
  /*pay() {
    this.showPaypalButtons = true;

    const dataproductos:any[]=[];





    let finalamount=0;


    const items:ITransactionItem[]=this.data.map(value => {

      finalamount+=Number(String(((value.unite_price)/Number(this.tipoCamo)).toFixed(2)))*value.quantity;

      return {
        name:value.product_name,
        quantity:String(value.quantity),
        category:"PHYSICAL_GOODS",
        unit_amount: {
          currency_code: "USD",
          value: String(((value.unite_price)/Number(this.tipoCamo)).toFixed(2))
        }


      }

    });

    const amoutFinal={

      currency_code:"USD",
      value:String(finalamount.toFixed(2)),
      breakdown:{
        item_total:{
          currency_code:"USD",
          value:String(finalamount.toFixed(2))
        }
      }

    }

    const data={
      amount:amoutFinal,
      items:items

    };
    dataproductos.push(data)

    console.log(dataproductos);

    this.cargarConfigPaypal(dataproductos);


  }*/
  display: boolean=false;

  a:string="";
  b:string="";
  c:string="";
  d:string="";
  e:string="";
  f:string="";
  g:string="";
  h:string="";
  i:string="";



  pay(){
    let datasend = this.data.map(value => {
      value.unite_price= Number(Number(value.unite_price*value.quantity).toFixed(2));
      return value;
    }).map(value=>value.unite_price).reduce((a,b)=>a+b,0);

    // @ts-ignore
    const mp = new MercadoPago('APP_USR-d7d77cfd-0a89-43d4-8f7a-c06d2750b89c');
    const cardForm = mp.cardForm({
      amount: String(datasend),
      autoMount: true,
      form: {
        id: "form-checkout",
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular de la tarjeta",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número de la tarjeta",
        },
        cardExpirationDate: {
          id: "form-checkout__cardExpirationDate",
          placeholder: "Fecha de vencimiento (MM/YYYY)",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de seguridad",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Cuotas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número de documento",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emisor",
        },
      },
      callbacks: {
        onFormMounted: (error:any) => {
          if (error) return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: (event:any) => {
          event.preventDefault();

          const  {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType

          }  = cardForm.getCardFormData();

          this.service.iniciarPagoProducto({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            persona:cardForm.getCardFormData().cardholderName,
            description: "Productos Varios",
            payer: {
              email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          }).subscribe(value => {

            this.messageService.add({severity: 'success', summary: 'Pago Completado', detail: ''});



            this.shared.dataCarritoEstablecer(null);
            this.cargarData();
            this.totalProductos();
            this.showPaypalButtons=false;
            this.a="";
            this.b="";
            this.c="";
            this.d="";
            this.e="";
            this.f="";

          },error => {

          })


        },
        onFetching: (resource:any) => {
          console.log("Fetching resource: ", resource);

        }
      },
    });

  }
  getToken():string{
    return localStorage.getItem("token")==null? "":String(localStorage.getItem("token"));
  }

  back(){
    this.showPaypalButtons = false;
  }

  constructor(private service: ProducsService, private shared: SharedserviceService, private messageService: MessageService,
              private http:HttpClient,private activeRoute:ActivatedRoute,private router:Router) {
    this.activeRoute.queryParamMap.subscribe(value => {


      if(value.keys.includes("PayerID")){

        this.messageService.add({severity: 'success', summary: 'Procesando Pago', detail: ''});



        const data={
          paymentId:value.get("paymentId"),
          token:value.get("token"),
          PayerID:value.get("PayerID")
        }
        this.displayModal=true;
        this.service.procesarPago(data).subscribe(value => {
          this.messageService.add({severity: 'success', summary: 'Pago procesado', detail: ''});
          this.shared.dataCarritoEstablecer(null);
          this.cargarData();
          this.totalProductos();
          this.router.navigate(["/pago"])

        },error => {
          this.displayModal=true;
          this.messageService.add({severity: 'error', summary: 'Error al procesar el pago', detail: ''});
          this.showPaypalButtons=false;
          this.router.navigate(["/"])

        })

      }

    })
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showDialog() {
    this.displayBasic = true;
  }
}
