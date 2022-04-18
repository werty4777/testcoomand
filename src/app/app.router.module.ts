import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./page/body/body.component";
import {ContactanosComponent} from "./page/contactanos/contactanos.component";
import {InitComponent} from "./page/init/init.component";
import {TestComponent} from "./page/test/test.component";
import {NosotrosComponent} from "./page/nosotros/nosotros.component";
import {EmpresasComponent} from "./page/empresas/empresas.component";
import {RegistroComponent} from "./page/registro/registro.component";
import {HistoriaComponent} from "./page/historia/historia.component";
import {ProductsComponent} from "./page/products/products.component";
import {PerfilComponent} from "./page/perfil/perfil.component";
import {PagoComponent} from "./page/pago/pago.component";


const routes: Routes = [{
  path:"",component:InitComponent,children :[
    {path:"",component:BodyComponent},
    {path:"Contactanos",component:ContactanosComponent},
    {path:"Prueba",component:TestComponent},
    {path:"Nosotros",component:NosotrosComponent},
    {path:"Empresas",component:EmpresasComponent},
    {path:"Registro",component:RegistroComponent},
    {path:"Historia",component:HistoriaComponent},
    {path:"Productos/:tipo",component:ProductsComponent},
    {path:"perfil",component:PerfilComponent},
    {path:"pago",component:PagoComponent},



    ]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {


}
