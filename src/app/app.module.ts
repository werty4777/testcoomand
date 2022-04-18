import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { BodyComponent } from './page/body/body.component';
import {CarouselModule} from "primeng/carousel";
import { LoginComponent } from './componentes/login/login.component';
import {RouterModule} from "@angular/router";
import {AppRouterModule} from "./app.router.module";
import {ContactanosComponent} from "./page/contactanos/contactanos.component";
import {InitComponent} from "./page/init/init.component";
import {TestComponent} from "./page/test/test.component";
import {NosotrosComponent} from "./page/nosotros/nosotros.component";
import {AutenticacionService} from "./services/autenticacion.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EmpresasComponent} from "./page/empresas/empresas.component";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RegistroComponent} from "./page/registro/registro.component";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputMaskModule} from "primeng/inputmask";
import {RecuperarComponent} from "./componentes/recuperar/recuperar.component";
import {PopUpComponent} from "./componentes/pop-up/pop-up.component";
import {SharedserviceService} from "./services/sharedservice.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HistoriaComponent} from "./page/historia/historia.component";
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import {SidebarModule} from "primeng/sidebar";
import {TabViewModule} from "primeng/tabview";
import {RequestInterceptor} from "./Intercepter/requestInterceptor";
import {ProducsService} from "./services/producs.service";
import {ProductsComponent} from "./page/products/products.component";
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {FieldsetModule} from "primeng/fieldset";
import {ListboxModule} from 'primeng/listbox';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {PerfilComponent} from "./page/perfil/perfil.component";
import {CuadrocerrarsesionComponent} from "./componentes/cuadrocerrarsesion/cuadrocerrarsesion.component";
import {PerfilUsuarioComponent} from "./componentes/perfil-usuario/perfil-usuario.component";
import {PedidosComponent} from "./componentes/pedidos/pedidos.component";
import {PagoComponent} from "./page/pago/pago.component";
import {DialogModule} from 'primeng/dialog';
import {ImageModule} from "primeng/image";
import { SwiperModule } from 'swiper/angular';
import { NgxPayPalModule } from 'ngx-paypal';
import {FileUploadModule} from 'primeng/fileupload';
import {AccordionModule} from 'primeng/accordion';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    ContactanosComponent,
    InitComponent,
    TestComponent,
    NosotrosComponent,
    EmpresasComponent,
    RegistroComponent,
    RecuperarComponent,
    PopUpComponent,
    HistoriaComponent,
    CarritoComponent,
    ProductsComponent,
    PerfilComponent,
    CuadrocerrarsesionComponent,
    PerfilUsuarioComponent,
    PedidosComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    RouterModule,
    AppRouterModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    PasswordModule,
    BrowserAnimationsModule,
    InputMaskModule,
    SidebarModule,
    TabViewModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    TimelineModule,
    CardModule,
    ToastModule,
    FieldsetModule,
    ListboxModule,
    SliderModule,
    CheckboxModule,
    DialogModule,
    ImageModule,SwiperModule,NgxPayPalModule,
    FileUploadModule,AccordionModule


  ],
  providers: [
    AutenticacionService,
    SharedserviceService,
    ProducsService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true

  },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
