import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../Models/ProductModel";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProducsService {

  constructor(private readonly http: HttpClient) {
  }

  ObtenerProductos(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(environment.urlbackend + "produtos/api/product/lista")

  }

  addCarrito(cantidad: any, id: any) {
    const url = environment.urlbackend + "pedidos/api/cart";


    return this.http.post(url, {
      quantity: cantidad, id_product: id
    });


  }

  buscarDataCarrito() {
    const url = environment.urlbackend + "pedidos/api/cart";

    return this.http.get(url);
  }

  eliminarProductoCarrito(id: any) {
    const url = environment.urlbackend + "pedidos/api/cart/" + id + "/0";

    return this.http.put(url, null);
  }

  cargarProductosPorUrl(categoria: any, subcategoria: string) {

    const url = `${environment.urlbackend}produtos/api/products/search/${categoria}/${subcategoria}`;

    return this.http.get(url)
  }

  busquedaProductos(sub: any) {
    const url = `${environment.urlbackend}produtos/api/products/search/${sub}`;

    return this.http.get(url)
  }

  cambiarValores(cantidad: any, id: any) {
    const url = environment.urlbackend + "pedidos/api/cart/" + id + "/" + cantidad;

    return this.http.put(url, null);
  }


  iniciarPagoProducto(data: any) {

    const url = environment.urlbackend + "pedidos/api/cart/make/payment";
/*

    let montoTotal = data.map(value => {
      return String((value.unite_price * value.quantity).toFixed(2));
    }).reduce((a, b) => {
      return (Number(a) + Number(b)).toFixed(2);
    });



    const productos=data.map(value => {


      return {
        idProducto: value.id_product, cantidad: value.quantity,


      }


    });
    const datasend={
      moneda:"USD",
      montoTotal:Number(montoTotal).toFixed(2),
      productoCompraList:productos
    }*/


    return this.http.post(url, data);
  }

  procesarPago(data: { PayerID: string | null; paymentId: string | null; token: string | null }) {

    const url = environment.urlbackend + "pedidos/api/cart/buy";


    const dd=[];
    dd.push(data);

    return this.http.post(url, dd);
  }


}
