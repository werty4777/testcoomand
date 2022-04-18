import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProyectoMaroishi';

  ngOnInit(): void {

    localStorage.setItem("datacarrito",JSON.stringify([]));
    localStorage.setItem("modal","0");

  }



}

