import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  displayModal:boolean=false;

  constructor() {

  }

  ngOnInit(): void {
    this.displayModal=true;

  }

}
