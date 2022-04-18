import {Component, OnInit, ViewEncapsulation,ViewChild} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
// @ts-ignore

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HistoriaComponent implements OnInit {
   events: any[]=[];
  @ViewChild('swiperRef', { static: false }) swiper?: SwiperComponent;

currentSlide=0;
slideCount=2;

  constructor() { }

  ngOnInit(): void {

    window.scrollTo(0, 0)
     this.events = [

            {status: 'INICIA NUESTRA HISTORIA', date: 'Años 90"', icon: "fas fa-book", color: 'red', image: '../../../assets/compañeros.jpg',
            textocontenido:"Nuestro Fundador Oswaldo jara callao  trabajo en la empresa “Matusita” como maquinista y logro fidelizar la confianza necesaria para convertirse en service de fabricación"},
            {status: 'FUNDACIÓN DE MAROISHI', date: '1992', icon: "fas fa-book", color: '#9C27B0', image: '../../../assets/fantigua.jpg',textocontenido:"Fuimos de las primeras ferreterías en V.E.S y logramos traer un producto Premium a buen precio. Logramos crear el taller donde podíamos fabricar cualquier tipo de tubo"},
            {status: 'MACETERO DE TUBO', date: '1992', icon: "fas fa-book", color: '#006775', image: '../../../assets/florero.jpg',textocontenido:"Creación de nuestro invento “Macetero de tubo”. Logramos crecer y mejorar nuestra infraestructura Y mejorar nuestro almacén"},
            {status: 'NUESTRA IMAGEN', date: '2020', icon: "fas fa-book", color: '#419544', image: '../../../assets/gactual.jpg',textocontenido:"Despues de mucho trabajo y esfuerzo logramos terminar  nuestro local dandonos una nueva imagen para nuestros clientes"},
        ];
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  slidedosmilveintidos(){
    // @ts-ignore
    this.swiper.swiperRef.slideTo(0);
  }
  slidedosmilveinte(){
    // @ts-ignore
    this.swiper.swiperRef.slideTo(1);
  }
  slidedosdicienueve(){
    // @ts-ignore
    this.swiper.swiperRef.slideTo(2);
  }
  slidedosdiciess(){
    // @ts-ignore
    this.swiper.swiperRef.slideTo(3);
  }
}
