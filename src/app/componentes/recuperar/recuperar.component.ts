import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  change(){
    this.sharedservice.cambioRecuperar(false)
    this.sharedservice.cambioLogin(true)
  }
  constructor(private sharedservice:SharedserviceService) { }

  ngOnInit(): void {
  }

}
