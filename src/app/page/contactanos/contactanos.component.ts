import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  uploadedFiles: any[] = [];
  private messageService: any;


  constructor(private seriviciocompleto:AutenticacionService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  alerta(usuario:any,contra:any){

  }

  onUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
